'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const AggregatorV2V3Interface = contract({
 "contractName": "AggregatorV2V3Interface",
 "abi": [
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "internalType": "int256",
     "name": "current",
     "type": "int256"
    },
    {
     "indexed": true,
     "internalType": "uint256",
     "name": "roundId",
     "type": "uint256"
    },
    {
     "indexed": false,
     "internalType": "uint256",
     "name": "updatedAt",
     "type": "uint256"
    }
   ],
   "name": "AnswerUpdated",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "internalType": "uint256",
     "name": "roundId",
     "type": "uint256"
    },
    {
     "indexed": true,
     "internalType": "address",
     "name": "startedBy",
     "type": "address"
    },
    {
     "indexed": false,
     "internalType": "uint256",
     "name": "startedAt",
     "type": "uint256"
    }
   ],
   "name": "NewRound",
   "type": "event"
  },
  {
   "inputs": [],
   "name": "decimals",
   "outputs": [
    {
     "internalType": "uint8",
     "name": "",
     "type": "uint8"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "description",
   "outputs": [
    {
     "internalType": "string",
     "name": "",
     "type": "string"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "uint256",
     "name": "roundId",
     "type": "uint256"
    }
   ],
   "name": "getAnswer",
   "outputs": [
    {
     "internalType": "int256",
     "name": "",
     "type": "int256"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "uint80",
     "name": "_roundId",
     "type": "uint80"
    }
   ],
   "name": "getRoundData",
   "outputs": [
    {
     "internalType": "uint80",
     "name": "roundId",
     "type": "uint80"
    },
    {
     "internalType": "int256",
     "name": "answer",
     "type": "int256"
    },
    {
     "internalType": "uint256",
     "name": "startedAt",
     "type": "uint256"
    },
    {
     "internalType": "uint256",
     "name": "updatedAt",
     "type": "uint256"
    },
    {
     "internalType": "uint80",
     "name": "answeredInRound",
     "type": "uint80"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "uint256",
     "name": "roundId",
     "type": "uint256"
    }
   ],
   "name": "getTimestamp",
   "outputs": [
    {
     "internalType": "uint256",
     "name": "",
     "type": "uint256"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "latestAnswer",
   "outputs": [
    {
     "internalType": "int256",
     "name": "",
     "type": "int256"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "latestRound",
   "outputs": [
    {
     "internalType": "uint256",
     "name": "",
     "type": "uint256"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "latestRoundData",
   "outputs": [
    {
     "internalType": "uint80",
     "name": "roundId",
     "type": "uint80"
    },
    {
     "internalType": "int256",
     "name": "answer",
     "type": "int256"
    },
    {
     "internalType": "uint256",
     "name": "startedAt",
     "type": "uint256"
    },
    {
     "internalType": "uint256",
     "name": "updatedAt",
     "type": "uint256"
    },
    {
     "internalType": "uint80",
     "name": "answeredInRound",
     "type": "uint80"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "latestTimestamp",
   "outputs": [
    {
     "internalType": "uint256",
     "name": "",
     "type": "uint256"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "version",
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
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x",
   "opcodes": "",
   "sourceMap": ""
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x",
   "opcodes": "",
   "sourceMap": ""
  },
  "methodIdentifiers": {
   "decimals()": "313ce567",
   "description()": "7284e416",
   "getAnswer(uint256)": "b5ab58dc",
   "getRoundData(uint80)": "9a6fc8f5",
   "getTimestamp(uint256)": "b633620c",
   "latestAnswer()": "50d25bcd",
   "latestRound()": "668a0f02",
   "latestRoundData()": "feaf968c",
   "latestTimestamp()": "8205bf6a",
   "version()": "54fd4d50"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"int256\",\"name\":\"current\",\"type\":\"int256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"roundId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"}],\"name\":\"AnswerUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"roundId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"startedBy\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"}],\"name\":\"NewRound\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"description\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"roundId\",\"type\":\"uint256\"}],\"name\":\"getAnswer\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint80\",\"name\":\"_roundId\",\"type\":\"uint80\"}],\"name\":\"getRoundData\",\"outputs\":[{\"internalType\":\"uint80\",\"name\":\"roundId\",\"type\":\"uint80\"},{\"internalType\":\"int256\",\"name\":\"answer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint80\",\"name\":\"answeredInRound\",\"type\":\"uint80\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"roundId\",\"type\":\"uint256\"}],\"name\":\"getTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestAnswer\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestRound\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestRoundData\",\"outputs\":[{\"internalType\":\"uint80\",\"name\":\"roundId\",\"type\":\"uint80\"},{\"internalType\":\"int256\",\"name\":\"answer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint80\",\"name\":\"answeredInRound\",\"type\":\"uint80\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"version\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/interfaces/AggregatorV2V3Interface.sol\":\"AggregatorV2V3Interface\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/interfaces/AggregatorInterface.sol\":{\"keccak256\":\"0x0e9b789c2f1b93d4d6ee417aa08531597a62b8e141b745d69ac3d10cda8d590e\",\"urls\":[\"bzz-raw://5fa4cb3b8b628a737c8695c90d818b80b4938677e07dbdc8156982210a3f5466\",\"dweb:/ipfs/QmPf4zA3ymoWQmzNzi7BvNe74zQ6MpasC7txUmr5Vo2Nsg\"]},\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/interfaces/AggregatorV2V3Interface.sol\":{\"keccak256\":\"0xfbc8193b0308883d76694a37ab791b58d9e229ae147a2e1297b7d4682a4b382d\",\"urls\":[\"bzz-raw://8185dfe554b4876a12be4d2eafd34bba48c77eaad8cf1837548f83b211eed1d9\",\"dweb:/ipfs/QmUHbu4yzzgtmsFM3oZrp3fh9XEQdgVHRBjuhHShpgwTgX\"]},\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/interfaces/AggregatorV3Interface.sol\":{\"keccak256\":\"0x12f0e35e0320088f2110173226860e44309766c0f7022a2433efdebd5bf1a002\",\"urls\":[\"bzz-raw://44645044454c4013f5f3bc3fda54b507494fe95921bf75de9a329933cb32b19d\",\"dweb:/ipfs/QmfP8kZZw6zYKy6cVPxbatSDZHiwTSJ1iMGyiYKE25DHLw\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('AggregatorV2V3Interface.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.AggregatorV2V3Interface = AggregatorV2V3Interface
