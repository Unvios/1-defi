import * as fs from 'fs'

export const UNIV3_WETH_USDT_500_ABI_WITH_HASH = [
    {
      "hash": "0c396cd989a39f4459b5fa1aed6a9a8dcdbc45908acfd67e028cd568da98982c",
      "abi": {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "int24",
            "name": "tickLower",
            "type": "int24"
          },
          {
            "indexed": true,
            "internalType": "int24",
            "name": "tickUpper",
            "type": "int24"
          },
          {
            "indexed": false,
            "internalType": "uint128",
            "name": "amount",
            "type": "uint128"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount1",
            "type": "uint256"
          }
        ],
        "name": "Burn",
        "type": "event"
      }
    },
    {
      "hash": "70935338e69775456a85ddef226c395fb668b63fa0115f5f20610b388e6ca9c0",
      "abi": {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "int24",
            "name": "tickLower",
            "type": "int24"
          },
          {
            "indexed": true,
            "internalType": "int24",
            "name": "tickUpper",
            "type": "int24"
          },
          {
            "indexed": false,
            "internalType": "uint128",
            "name": "amount0",
            "type": "uint128"
          },
          {
            "indexed": false,
            "internalType": "uint128",
            "name": "amount1",
            "type": "uint128"
          }
        ],
        "name": "Collect",
        "type": "event"
      }
    },
    {
      "hash": "596b573906218d3411850b26a6b437d6c4522fdb43d2d2386263f86d50b8b151",
      "abi": {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint128",
            "name": "amount0",
            "type": "uint128"
          },
          {
            "indexed": false,
            "internalType": "uint128",
            "name": "amount1",
            "type": "uint128"
          }
        ],
        "name": "CollectProtocol",
        "type": "event"
      }
    },
    {
      "hash": "bdbdb71d7860376ba52b25a5028beea23581364a40522f6bcfb86bb1f2dca633",
      "abi": {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount1",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "paid0",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "paid1",
            "type": "uint256"
          }
        ],
        "name": "Flash",
        "type": "event"
      }
    },
    {
      "hash": "ac49e518f90a358f652e4400164f05a5d8f7e35e7747279bc3a93dbf584e125a",
      "abi": {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint16",
            "name": "observationCardinalityNextOld",
            "type": "uint16"
          },
          {
            "indexed": false,
            "internalType": "uint16",
            "name": "observationCardinalityNextNew",
            "type": "uint16"
          }
        ],
        "name": "IncreaseObservationCardinalityNext",
        "type": "event"
      }
    },
    {
      "hash": "98636036cb66a9c19a37435efc1e90142190214e8abeb821bdba3f2990dd4c95",
      "abi": {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint160",
            "name": "sqrtPriceX96",
            "type": "uint160"
          },
          {
            "indexed": false,
            "internalType": "int24",
            "name": "tick",
            "type": "int24"
          }
        ],
        "name": "Initialize",
        "type": "event"
      }
    },
    {
      "hash": "7a53080ba414158be7ec69b987b5fb7d07dee101fe85488f0853ae16239d0bde",
      "abi": {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "int24",
            "name": "tickLower",
            "type": "int24"
          },
          {
            "indexed": true,
            "internalType": "int24",
            "name": "tickUpper",
            "type": "int24"
          },
          {
            "indexed": false,
            "internalType": "uint128",
            "name": "amount",
            "type": "uint128"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount1",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      }
    },
    {
      "hash": "973d8d92bb299f4af6ce49b52a8adb85ae46b9f214c4c4fc06ac77401237b133",
      "abi": {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "feeProtocol0Old",
            "type": "uint8"
          },
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "feeProtocol1Old",
            "type": "uint8"
          },
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "feeProtocol0New",
            "type": "uint8"
          },
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "feeProtocol1New",
            "type": "uint8"
          }
        ],
        "name": "SetFeeProtocol",
        "type": "event"
      }
    },
    {
      "hash": "c42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67",
      "abi": {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "int256",
            "name": "amount0",
            "type": "int256"
          },
          {
            "indexed": false,
            "internalType": "int256",
            "name": "amount1",
            "type": "int256"
          },
          {
            "indexed": false,
            "internalType": "uint160",
            "name": "sqrtPriceX96",
            "type": "uint160"
          },
          {
            "indexed": false,
            "internalType": "uint128",
            "name": "liquidity",
            "type": "uint128"
          },
          {
            "indexed": false,
            "internalType": "int24",
            "name": "tick",
            "type": "int24"
          }
        ],
        "name": "Swap",
        "type": "event"
      }
    },
    {
      "hash": "a34123a7",
      "abi": {
        "inputs": [
          {
            "internalType": "int24",
            "name": "tickLower",
            "type": "int24"
          },
          {
            "internalType": "int24",
            "name": "tickUpper",
            "type": "int24"
          },
          {
            "internalType": "uint128",
            "name": "amount",
            "type": "uint128"
          }
        ],
        "name": "burn",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount1",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "4f1eb3d8",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "int24",
            "name": "tickLower",
            "type": "int24"
          },
          {
            "internalType": "int24",
            "name": "tickUpper",
            "type": "int24"
          },
          {
            "internalType": "uint128",
            "name": "amount0Requested",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "amount1Requested",
            "type": "uint128"
          }
        ],
        "name": "collect",
        "outputs": [
          {
            "internalType": "uint128",
            "name": "amount0",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "amount1",
            "type": "uint128"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "85b66729",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "amount0Requested",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "amount1Requested",
            "type": "uint128"
          }
        ],
        "name": "collectProtocol",
        "outputs": [
          {
            "internalType": "uint128",
            "name": "amount0",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "amount1",
            "type": "uint128"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "c45a0155",
      "abi": {
        "inputs": [

        ],
        "name": "factory",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "ddca3f43",
      "abi": {
        "inputs": [

        ],
        "name": "fee",
        "outputs": [
          {
            "internalType": "uint24",
            "name": "",
            "type": "uint24"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "f3058399",
      "abi": {
        "inputs": [

        ],
        "name": "feeGrowthGlobal0X128",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "46141319",
      "abi": {
        "inputs": [

        ],
        "name": "feeGrowthGlobal1X128",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "490e6cbc",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount1",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "flash",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "32148f67",
      "abi": {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "observationCardinalityNext",
            "type": "uint16"
          }
        ],
        "name": "increaseObservationCardinalityNext",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "f637731d",
      "abi": {
        "inputs": [
          {
            "internalType": "uint160",
            "name": "sqrtPriceX96",
            "type": "uint160"
          }
        ],
        "name": "initialize",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "1a686502",
      "abi": {
        "inputs": [

        ],
        "name": "liquidity",
        "outputs": [
          {
            "internalType": "uint128",
            "name": "",
            "type": "uint128"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "70cf754a",
      "abi": {
        "inputs": [

        ],
        "name": "maxLiquidityPerTick",
        "outputs": [
          {
            "internalType": "uint128",
            "name": "",
            "type": "uint128"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "3c8a7d8d",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "int24",
            "name": "tickLower",
            "type": "int24"
          },
          {
            "internalType": "int24",
            "name": "tickUpper",
            "type": "int24"
          },
          {
            "internalType": "uint128",
            "name": "amount",
            "type": "uint128"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount1",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "252c09d7",
      "abi": {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "observations",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "blockTimestamp",
            "type": "uint32"
          },
          {
            "internalType": "int56",
            "name": "tickCumulative",
            "type": "int56"
          },
          {
            "internalType": "uint160",
            "name": "secondsPerLiquidityCumulativeX128",
            "type": "uint160"
          },
          {
            "internalType": "bool",
            "name": "initialized",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "883bdbfd",
      "abi": {
        "inputs": [
          {
            "internalType": "uint32[]",
            "name": "secondsAgos",
            "type": "uint32[]"
          }
        ],
        "name": "observe",
        "outputs": [
          {
            "internalType": "int56[]",
            "name": "tickCumulatives",
            "type": "int56[]"
          },
          {
            "internalType": "uint160[]",
            "name": "secondsPerLiquidityCumulativeX128s",
            "type": "uint160[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "514ea4bf",
      "abi": {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "positions",
        "outputs": [
          {
            "internalType": "uint128",
            "name": "liquidity",
            "type": "uint128"
          },
          {
            "internalType": "uint256",
            "name": "feeGrowthInside0LastX128",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "feeGrowthInside1LastX128",
            "type": "uint256"
          },
          {
            "internalType": "uint128",
            "name": "tokensOwed0",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "tokensOwed1",
            "type": "uint128"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "1ad8b03b",
      "abi": {
        "inputs": [

        ],
        "name": "protocolFees",
        "outputs": [
          {
            "internalType": "uint128",
            "name": "token0",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "token1",
            "type": "uint128"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "8206a4d1",
      "abi": {
        "inputs": [
          {
            "internalType": "uint8",
            "name": "feeProtocol0",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "feeProtocol1",
            "type": "uint8"
          }
        ],
        "name": "setFeeProtocol",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "3850c7bd",
      "abi": {
        "inputs": [

        ],
        "name": "slot0",
        "outputs": [
          {
            "internalType": "uint160",
            "name": "sqrtPriceX96",
            "type": "uint160"
          },
          {
            "internalType": "int24",
            "name": "tick",
            "type": "int24"
          },
          {
            "internalType": "uint16",
            "name": "observationIndex",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "observationCardinality",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "observationCardinalityNext",
            "type": "uint16"
          },
          {
            "internalType": "uint8",
            "name": "feeProtocol",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "unlocked",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "a38807f2",
      "abi": {
        "inputs": [
          {
            "internalType": "int24",
            "name": "tickLower",
            "type": "int24"
          },
          {
            "internalType": "int24",
            "name": "tickUpper",
            "type": "int24"
          }
        ],
        "name": "snapshotCumulativesInside",
        "outputs": [
          {
            "internalType": "int56",
            "name": "tickCumulativeInside",
            "type": "int56"
          },
          {
            "internalType": "uint160",
            "name": "secondsPerLiquidityInsideX128",
            "type": "uint160"
          },
          {
            "internalType": "uint32",
            "name": "secondsInside",
            "type": "uint32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "128acb08",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "zeroForOne",
            "type": "bool"
          },
          {
            "internalType": "int256",
            "name": "amountSpecified",
            "type": "int256"
          },
          {
            "internalType": "uint160",
            "name": "sqrtPriceLimitX96",
            "type": "uint160"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "swap",
        "outputs": [
          {
            "internalType": "int256",
            "name": "amount0",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "amount1",
            "type": "int256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "5339c296",
      "abi": {
        "inputs": [
          {
            "internalType": "int16",
            "name": "",
            "type": "int16"
          }
        ],
        "name": "tickBitmap",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "d0c93a7c",
      "abi": {
        "inputs": [

        ],
        "name": "tickSpacing",
        "outputs": [
          {
            "internalType": "int24",
            "name": "",
            "type": "int24"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "f30dba93",
      "abi": {
        "inputs": [
          {
            "internalType": "int24",
            "name": "",
            "type": "int24"
          }
        ],
        "name": "ticks",
        "outputs": [
          {
            "internalType": "uint128",
            "name": "liquidityGross",
            "type": "uint128"
          },
          {
            "internalType": "int128",
            "name": "liquidityNet",
            "type": "int128"
          },
          {
            "internalType": "uint256",
            "name": "feeGrowthOutside0X128",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "feeGrowthOutside1X128",
            "type": "uint256"
          },
          {
            "internalType": "int56",
            "name": "tickCumulativeOutside",
            "type": "int56"
          },
          {
            "internalType": "uint160",
            "name": "secondsPerLiquidityOutsideX128",
            "type": "uint160"
          },
          {
            "internalType": "uint32",
            "name": "secondsOutside",
            "type": "uint32"
          },
          {
            "internalType": "bool",
            "name": "initialized",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "0dfe1681",
      "abi": {
        "inputs": [

        ],
        "name": "token0",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "d21220a7",
      "abi": {
        "inputs": [

        ],
        "name": "token1",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    }
]

export const UNIV3_WETH_USDT_500_ABI = UNIV3_WETH_USDT_500_ABI_WITH_HASH.map(i => i.abi)

if (!fs.existsSync(process.cwd() + '/abi')) {
    fs.mkdirSync(process.cwd() + '/abi')
}

fs.writeFileSync(
    process.cwd() + '/abi/' + __filename.split('/').pop()?.replace('.ts', '.json'),
    JSON.stringify(UNIV3_WETH_USDT_500_ABI, undefined, 4),
    { flag: 'w' },
)
