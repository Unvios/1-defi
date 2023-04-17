import * as fs from 'fs'

export const UNIV3_NFT_POSITION_MANAGER_ABI_WITH_HASH = [
    {
      "hash": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
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
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      }
    },
    {
      "hash": "17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31",
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
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      }
    },
    {
      "hash": "40d0efd1a53d60ecbf40971b9daf7dc90178c3aadc7aab1765632738fa8b8f01",
      "abi": {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
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
          }
        ],
        "name": "Collect",
        "type": "event"
      }
    },
    {
      "hash": "26f6a048ee9138f2c0ce266f322cb99228e8d619ae2bff30c67f8dcf9d2377b4",
      "abi": {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint128",
            "name": "liquidity",
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
        "name": "DecreaseLiquidity",
        "type": "event"
      }
    },
    {
      "hash": "3067048beee31b25b2f1681f88dac838c8bba36af25bfb2b7cf7473a5847e35f",
      "abi": {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint128",
            "name": "liquidity",
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
        "name": "IncreaseLiquidity",
        "type": "event"
      }
    },
    {
      "hash": "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      "abi": {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      }
    },
    {
      "hash": "3644e515",
      "abi": {
        "inputs": [

        ],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "30adf81f",
      "abi": {
        "inputs": [

        ],
        "name": "PERMIT_TYPEHASH",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "4aa4a4fc",
      "abi": {
        "inputs": [

        ],
        "name": "WETH9",
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
      "hash": "095ea7b3",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "70a08231",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
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
      "hash": "6c0360eb",
      "abi": {
        "inputs": [

        ],
        "name": "baseURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      }
    },
    {
      "hash": "42966c68",
      "abi": {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [

        ],
        "stateMutability": "payable",
        "type": "function"
      }
    },
    {
      "hash": "fc6f7865",
      "abi": {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint128",
                "name": "amount0Max",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "amount1Max",
                "type": "uint128"
              }
            ],
            "internalType": "struct INonfungiblePositionManager.CollectParams",
            "name": "params",
            "type": "tuple"
          }
        ],
        "name": "collect",
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
        "stateMutability": "payable",
        "type": "function"
      }
    },
    {
      "hash": "13ead562",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "token0",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "token1",
            "type": "address"
          },
          {
            "internalType": "uint24",
            "name": "fee",
            "type": "uint24"
          },
          {
            "internalType": "uint160",
            "name": "sqrtPriceX96",
            "type": "uint160"
          }
        ],
        "name": "createAndInitializePoolIfNecessary",
        "outputs": [
          {
            "internalType": "address",
            "name": "pool",
            "type": "address"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      }
    },
    {
      "hash": "0c49ccbe",
      "abi": {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              },
              {
                "internalType": "uint128",
                "name": "liquidity",
                "type": "uint128"
              },
              {
                "internalType": "uint256",
                "name": "amount0Min",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount1Min",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
              }
            ],
            "internalType": "struct INonfungiblePositionManager.DecreaseLiquidityParams",
            "name": "params",
            "type": "tuple"
          }
        ],
        "name": "decreaseLiquidity",
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
        "stateMutability": "payable",
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
      "hash": "081812fc",
      "abi": {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
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
      "hash": "219f5d17",
      "abi": {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount0Desired",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount1Desired",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount0Min",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount1Min",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
              }
            ],
            "internalType": "struct INonfungiblePositionManager.IncreaseLiquidityParams",
            "name": "params",
            "type": "tuple"
          }
        ],
        "name": "increaseLiquidity",
        "outputs": [
          {
            "internalType": "uint128",
            "name": "liquidity",
            "type": "uint128"
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
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      }
    },
    {
      "hash": "e985e9c5",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "88316456",
      "abi": {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "internalType": "uint24",
                "name": "fee",
                "type": "uint24"
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
                "internalType": "uint256",
                "name": "amount0Desired",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount1Desired",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount0Min",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount1Min",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
              }
            ],
            "internalType": "struct INonfungiblePositionManager.MintParams",
            "name": "params",
            "type": "tuple"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "uint128",
            "name": "liquidity",
            "type": "uint128"
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
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      }
    },
    {
      "hash": "ac9650d8",
      "abi": {
        "inputs": [
          {
            "internalType": "bytes[]",
            "name": "data",
            "type": "bytes[]"
          }
        ],
        "name": "multicall",
        "outputs": [
          {
            "internalType": "bytes[]",
            "name": "results",
            "type": "bytes[]"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      }
    },
    {
      "hash": "06fdde03",
      "abi": {
        "inputs": [

        ],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "6352211e",
      "abi": {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
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
      "hash": "7ac2ff7b",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "name": "permit",
        "outputs": [

        ],
        "stateMutability": "payable",
        "type": "function"
      }
    },
    {
      "hash": "99fbab88",
      "abi": {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "positions",
        "outputs": [
          {
            "internalType": "uint96",
            "name": "nonce",
            "type": "uint96"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "token0",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "token1",
            "type": "address"
          },
          {
            "internalType": "uint24",
            "name": "fee",
            "type": "uint24"
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
      "hash": "12210e8a",
      "abi": {
        "inputs": [

        ],
        "name": "refundETH",
        "outputs": [

        ],
        "stateMutability": "payable",
        "type": "function"
      }
    },
    {
      "hash": "42842e0e",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "b88d4fde",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "f3995c67",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "name": "selfPermit",
        "outputs": [

        ],
        "stateMutability": "payable",
        "type": "function"
      }
    },
    {
      "hash": "4659a494",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "name": "selfPermitAllowed",
        "outputs": [

        ],
        "stateMutability": "payable",
        "type": "function"
      }
    },
    {
      "hash": "a4a78f0c",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "name": "selfPermitAllowedIfNecessary",
        "outputs": [

        ],
        "stateMutability": "payable",
        "type": "function"
      }
    },
    {
      "hash": "c2e3140a",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "name": "selfPermitIfNecessary",
        "outputs": [

        ],
        "stateMutability": "payable",
        "type": "function"
      }
    },
    {
      "hash": "a22cb465",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "01ffc9a7",
      "abi": {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "df2ab5bb",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amountMinimum",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          }
        ],
        "name": "sweepToken",
        "outputs": [

        ],
        "stateMutability": "payable",
        "type": "function"
      }
    },
    {
      "hash": "95d89b41",
      "abi": {
        "inputs": [

        ],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "4f6ccce7",
      "abi": {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
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
      "hash": "2f745c59",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
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
      "hash": "c87b56dd",
      "abi": {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    },
    {
      "hash": "18160ddd",
      "abi": {
        "inputs": [

        ],
        "name": "totalSupply",
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
      "hash": "23b872dd",
      "abi": {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "d3487997",
      "abi": {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount0Owed",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount1Owed",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "uniswapV3MintCallback",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    },
    {
      "hash": "49404b7c",
      "abi": {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amountMinimum",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          }
        ],
        "name": "unwrapWETH9",
        "outputs": [

        ],
        "stateMutability": "payable",
        "type": "function"
      }
    }
]

export const UNIV3_NFT_POSITION_MANAGER_ABI = UNIV3_NFT_POSITION_MANAGER_ABI_WITH_HASH.map(i => i.abi)

if (!fs.existsSync(process.cwd() + '/abi')) {
    fs.mkdirSync(process.cwd() + '/abi')
}

fs.writeFileSync(
    process.cwd() + '/abi/' + __filename.split('/').pop()?.replace('.ts', '.json'),
    JSON.stringify(UNIV3_NFT_POSITION_MANAGER_ABI, undefined, 4),
    { flag: 'w' },
)
