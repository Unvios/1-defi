import { Injectable } from '@nestjs/common';
import { Token } from '@uniswap/sdk-core';
import { nearestUsableTick, Pool, Position } from '@uniswap/v3-sdk';
import { BigNumber } from 'bignumber.js';
import { ethers } from 'ethers';
import { ConnectionInfo } from 'ethers/lib/utils';
import { getOne } from 'src/utils/get-one.util';
import { UniV3ContractAbi__factory, UniV3NftPositionManagerAbi__factory } from '@typechain';
import Decimal from 'decimal.js';

const UniswapV3NftPositionmanager = {
    "name": "UniswapV3NFTPositionManager",
    "address": "0xc36442b4a4522e871399cd717abdd847ab11fe88",
}

@Injectable()
export class UniV3Service {
    private readonly _name = 'homestead'
    private readonly _chainId = 1

    private readonly _ownerAddress = '0xAf4fD6117448B5FE1727412114cdF3450DEbc9e0'.toLowerCase()

    private readonly _provider: ethers.providers.JsonRpcProvider

    constructor() {
        const providerConnectionInfo: ConnectionInfo = {
            url: 'http://localhost:8545',
        }

        const providerNetworkInfo = {
            name: this._name,
            chainId: this._chainId,
        }

        this._provider = new ethers.providers.JsonRpcProvider(
            providerConnectionInfo,
            providerNetworkInfo,
        )
    }

    async onModuleInit() {
        const { priceLower, priceUpper } = await this.getPoolRange(this._provider)

        const ratio = await this.getTokensRatio({
            priceLower,
            priceUpper,
            provider: this._provider,
        })

        console.log('{ priceLower, priceUpper }', { priceLower, priceUpper })
        console.log('ratio', ratio)

        await this.invest({
            priceLower,
            priceUpper,
            provider: this._provider,
        })
    }

    async getPoolRange(provider: ethers.providers.JsonRpcProvider) {
        const pool = await this._createPool(provider)
        const poolPrice0 = pool.priceOf(pool.token0).toSignificant(6)

        const priceLower = new BigNumber(poolPrice0).div(3).toFixed(6)
        const priceUpper = new BigNumber(poolPrice0).multipliedBy(3).toFixed(6)

        return { priceLower, priceUpper }
    }

    async getTokensRatio(dto: {
        provider: ethers.providers.JsonRpcProvider
        priceLower: string
        priceUpper: string
    }) {
        const { provider, priceLower, priceUpper } = dto

        const pool = await this._createPool(provider)

        const lowerDecimalsDiffPow = new Decimal('10').pow(pool.token0.decimals - pool.token1.decimals)
        const lowerPrice = new Decimal(priceLower).div(lowerDecimalsDiffPow)
        const lowerAdjustableTick = lowerPrice.log('1.0001').round().toNumber()

        const upperDecimalsDiffPow = new Decimal('10').pow(pool.token0.decimals - pool.token1.decimals)
        const upperPrice = new Decimal(priceUpper).div(upperDecimalsDiffPow)
        const upperAdjustableTick = upperPrice.log('1.0001').round().toNumber()

        const tickLower = nearestUsableTick(lowerAdjustableTick, pool.tickSpacing)
        const tickUpper = nearestUsableTick(upperAdjustableTick, pool.tickSpacing)

        const amount0 = ethers.BigNumber.from(
            new BigNumber('1').multipliedBy(new BigNumber('10').pow(pool.token0.decimals)).toFixed(0, BigNumber.ROUND_FLOOR)
        ).toString()

        const position = Position.fromAmount0({
            pool,
            amount0,
            tickLower,
            tickUpper,
            useFullPrecision: true,
        })

        const amount1: string = position.amount1.toSignificant(6)
        const currentPrice = pool.priceOf(pool.token0).toSignificant(6)

        const sum: Decimal = new Decimal(currentPrice).plus(amount1)
        const amount0Percent = new Decimal(currentPrice).mul('100').div(sum).toFixed(6)
        const amount1Percent = new Decimal('100').minus(amount0Percent).toFixed(6)

        return {
            [pool.token0.address]: amount0Percent,
            [pool.token1.address]: amount1Percent,
        }
    }

    async invest(dto: {
        provider: ethers.providers.JsonRpcProvider
        priceLower: string
        priceUpper: string
    }) {
        const { provider, priceLower, priceUpper } = dto

        const pool = await this._createPool(provider)

        const lowerDecimalsDiffPow = new Decimal('10').pow(pool.token0.decimals - pool.token1.decimals)
        const lowerPrice = new Decimal(priceLower).div(lowerDecimalsDiffPow)
        const lowerAdjustableTick = lowerPrice.log('1.0001').round().toNumber()

        const upperDecimalsDiffPow = new Decimal('10').pow(pool.token0.decimals - pool.token1.decimals)
        const upperPrice = new Decimal(priceUpper).div(upperDecimalsDiffPow)
        const upperAdjustableTick = upperPrice.log('1.0001').round().toNumber()

        const tickLower = nearestUsableTick(lowerAdjustableTick, pool.tickSpacing)
        const tickUpper = nearestUsableTick(upperAdjustableTick, pool.tickSpacing)

        const amountDesired0 = ethers.BigNumber.from(new BigNumber(1).multipliedBy(new BigNumber('10').pow(pool.token0.decimals)).toFixed(0, BigNumber.ROUND_FLOOR))
        const amountDesired1 = ethers.BigNumber.from(new BigNumber(1568).multipliedBy(new BigNumber('10').pow(pool.token1.decimals)).toFixed(0, BigNumber.ROUND_FLOOR))

        const percent100 = 100

        const amount0Min = ethers.BigNumber.from(
            new BigNumber('0').div(percent100).multipliedBy(amountDesired0.toString()).toFixed(0, BigNumber.ROUND_FLOOR)
        )

        const amount1Min = ethers.BigNumber.from(
            new BigNumber('0').div(percent100).multipliedBy(amountDesired1.toString()).toFixed(0, BigNumber.ROUND_FLOOR)
        )

        const mintArgs = {
            token0: pool.token0.address,
            token1: pool.token1.address,
            fee: ethers.BigNumber.from(pool.fee),
            tickLower: ethers.BigNumber.from(tickLower),
            tickUpper: ethers.BigNumber.from(tickUpper),
            amount0Desired: amountDesired0,
            amount1Desired: amountDesired1,
            amount0Min,
            amount1Min,
            recipient: this._ownerAddress,
            deadline: ethers.BigNumber.from(+new Date() + (60 * 60 * 1000) / 2),
        }

        const overrides = {
            from: this._ownerAddress,
            value: amountDesired0,
        }

        const positionManagerContract = UniV3NftPositionManagerAbi__factory.connect(UniswapV3NftPositionmanager.address, provider)
        const { tokenId, liquidity, amount0, amount1 } = await positionManagerContract.callStatic.mint(mintArgs, overrides)

        const mintData = positionManagerContract.interface.encodeFunctionData('mint', [mintArgs])
        const refundWETHData = positionManagerContract.interface.encodeFunctionData('refundETH')
        const multicallArgs = [mintData, refundWETHData]

        const data = positionManagerContract.interface.encodeFunctionData('multicall', [multicallArgs])
        const estimateGas = await positionManagerContract.estimateGas.multicall(multicallArgs, overrides)

        const txArgs = {
            data,
            addressFrom: this._ownerAddress,
            addressTo: positionManagerContract.address,
            estimateGas: estimateGas.toNumber(),
            feeLevel: "OPTIMAL",
            value: amountDesired0.toString(),
        }




        const transactionsCount = await provider.getTransactionCount(
            this._ownerAddress,
            'pending',
        )

        const nonce = ethers.BigNumber.from(transactionsCount).toHexString()

        const qqq = new BigNumber(estimateGas.toString()).multipliedBy('1.1').decimalPlaces(0, BigNumber.ROUND_FLOOR).toNumber()

        const multipliedGasLimit = ethers.BigNumber.from(new BigNumber(estimateGas.toString()).multipliedBy('1.1').toFixed(0, BigNumber.ROUND_FLOOR))
        const gasLimit = multipliedGasLimit.toHexString()
        const txValue = txArgs.value
            ? ethers.BigNumber.from(txArgs.value).toHexString()
            : ethers.BigNumber.from(0).toHexString()
            // : ethersUtils.hexlify(0)



        const { maxFeePerGas: f, maxPriorityFeePerGas: g, gasPrice: p } = await provider.getFeeData()

        const maxPriorityFeePerGas =  g?.toHexString()
        const maxFeePerGas = f?.toHexString()
        const gasPrice = p?.toHexString()

        const unsignedTransaction: Record<string, unknown> = {
            nonce,
            gasLimit,
            value: txValue,
            data,
            to: txArgs.addressTo,
        }

        if (gasPrice) {
            unsignedTransaction.gasPrice = gasPrice
        } else {
            unsignedTransaction.maxPriorityFeePerGas = maxPriorityFeePerGas
            unsignedTransaction.maxFeePerGas = maxFeePerGas
        }

        // console.log('unsignedTransaction', JSON.stringify(unsignedTransaction, undefined, 2))

        const signer = new ethers.Wallet('0x90334c8ac623af0a7ff92bcd2442963f87f37b739393998920b84ff5b0b0fdb3', provider)

        const response = await signer.sendTransaction(unsignedTransaction)

        console.log(response.hash)
    }

    private _getPercentageAmountEthers (amount: ethers.BigNumber, percent = '99') {
        const percent100 = 100

        const percentageAmount = new BigNumber(percent)
            .div(percent100)
            .multipliedBy(amount.toString())
            .toFixed(0, BigNumber.ROUND_FLOOR)

        return ethers.BigNumber.from(percentageAmount)
    };

    private async _createPool(provider: ethers.providers.JsonRpcProvider): Promise<Pool> {
        const poolName = 'UNIV3-WETH-USDT-500'
        const poolAddress = '0x11b815efb8f581194ae79006d24e0d814b7697f6'

        const tokenItems = [{
            symbol: 'WETH',
            address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            decimals: 18,
        }, {
            symbol: 'USDT',
            address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            decimals: 6,
        }]

        const poolContract = UniV3ContractAbi__factory.connect(poolAddress, provider)

        const tokenAddress0 = (await poolContract.callStatic.token0()).toLowerCase()
        const tokenAddress1 = (await poolContract.callStatic.token1()).toLowerCase()

        const token0 = getOne(tokenItems, 'address', tokenAddress0)
        const token1 = getOne(tokenItems, 'address', tokenAddress1)


        const poolTokenA = new Token(this._chainId, token0.address, token0.decimals, token0.symbol)
        const poolTokenB = new Token(this._chainId, token1.address, token1.decimals, token1.symbol)
        const poolLiquidity = await poolContract.callStatic.liquidity()
        const { tick, sqrtPriceX96 } = await poolContract.callStatic.slot0()
        const fee = await poolContract.callStatic.fee()

        return new Pool(poolTokenA, poolTokenB, fee, sqrtPriceX96.toString(), poolLiquidity.toString(), tick)
    }
}
