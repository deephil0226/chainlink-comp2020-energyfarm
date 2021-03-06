'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const MockV2Aggregator = contract({
 "contractName": "MockV2Aggregator",
 "abi": [
  {
   "inputs": [
    {
     "internalType": "int256",
     "name": "_initialAnswer",
     "type": "int256"
    }
   ],
   "stateMutability": "nonpayable",
   "type": "constructor"
  },
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
   "inputs": [
    {
     "internalType": "uint256",
     "name": "",
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
     "internalType": "uint256",
     "name": "",
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
   "inputs": [
    {
     "internalType": "int256",
     "name": "_answer",
     "type": "int256"
    }
   ],
   "name": "updateAnswer",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "uint256",
     "name": "_roundId",
     "type": "uint256"
    },
    {
     "internalType": "int256",
     "name": "_answer",
     "type": "int256"
    },
    {
     "internalType": "uint256",
     "name": "_timestamp",
     "type": "uint256"
    },
    {
     "internalType": "uint256",
     "name": "_startedAt",
     "type": "uint256"
    }
   ],
   "name": "updateRoundData",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b506040516102a43803806102a48339818101604052602081101561003357600080fd5b5051610047816001600160e01b0361004d16565b50610082565b600081815542600181815560028054909101808255835260036020908152604080852095909555905483526004905291902055565b610213806100916000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639ab29f451161005b5780639ab29f45146100ac578063a87a20ce146100dd578063b5ab58dc146100fa578063b633620c146101175761007d565b806350d25bcd14610082578063668a0f021461009c5780638205bf6a146100a4575b600080fd5b61008a610134565b60408051918252519081900360200190f35b61008a61013a565b61008a610140565b6100db600480360360808110156100c257600080fd5b5080359060208101359060408101359060600135610146565b005b6100db600480360360208110156100f357600080fd5b5035610184565b61008a6004803603602081101561011057600080fd5b50356101b9565b61008a6004803603602081101561012d57600080fd5b50356101cb565b60005481565b60025481565b60015481565b600284815560008481556001849055948552600360209081526040808720959095558154865260048152848620939093555484526005909152912055565b600081815542600181815560028054909101808255835260036020908152604080852095909555905483526004905291902055565b60036020526000908152604090205481565b6004602052600090815260409020548156fea264697066735822122072f52103e03348ebfd7af101af8f067cfa7fa957204db0e2ce481ba11f0d9d8e64736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x2A4 CODESIZE SUB DUP1 PUSH2 0x2A4 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x33 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP MLOAD PUSH2 0x47 DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB PUSH2 0x4D AND JUMP JUMPDEST POP PUSH2 0x82 JUMP JUMPDEST PUSH1 0x0 DUP2 DUP2 SSTORE TIMESTAMP PUSH1 0x1 DUP2 DUP2 SSTORE PUSH1 0x2 DUP1 SLOAD SWAP1 SWAP2 ADD DUP1 DUP3 SSTORE DUP4 MSTORE PUSH1 0x3 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP6 KECCAK256 SWAP6 SWAP1 SWAP6 SSTORE SWAP1 SLOAD DUP4 MSTORE PUSH1 0x4 SWAP1 MSTORE SWAP2 SWAP1 KECCAK256 SSTORE JUMP JUMPDEST PUSH2 0x213 DUP1 PUSH2 0x91 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x7D JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x9AB29F45 GT PUSH2 0x5B JUMPI DUP1 PUSH4 0x9AB29F45 EQ PUSH2 0xAC JUMPI DUP1 PUSH4 0xA87A20CE EQ PUSH2 0xDD JUMPI DUP1 PUSH4 0xB5AB58DC EQ PUSH2 0xFA JUMPI DUP1 PUSH4 0xB633620C EQ PUSH2 0x117 JUMPI PUSH2 0x7D JUMP JUMPDEST DUP1 PUSH4 0x50D25BCD EQ PUSH2 0x82 JUMPI DUP1 PUSH4 0x668A0F02 EQ PUSH2 0x9C JUMPI DUP1 PUSH4 0x8205BF6A EQ PUSH2 0xA4 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x8A PUSH2 0x134 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x8A PUSH2 0x13A JUMP JUMPDEST PUSH2 0x8A PUSH2 0x140 JUMP JUMPDEST PUSH2 0xDB PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x80 DUP2 LT ISZERO PUSH2 0xC2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 DUP2 ADD CALLDATALOAD SWAP1 PUSH1 0x40 DUP2 ADD CALLDATALOAD SWAP1 PUSH1 0x60 ADD CALLDATALOAD PUSH2 0x146 JUMP JUMPDEST STOP JUMPDEST PUSH2 0xDB PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0xF3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x184 JUMP JUMPDEST PUSH2 0x8A PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x110 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x1B9 JUMP JUMPDEST PUSH2 0x8A PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x12D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x1CB JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 DUP5 DUP2 SSTORE PUSH1 0x0 DUP5 DUP2 SSTORE PUSH1 0x1 DUP5 SWAP1 SSTORE SWAP5 DUP6 MSTORE PUSH1 0x3 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP8 KECCAK256 SWAP6 SWAP1 SWAP6 SSTORE DUP2 SLOAD DUP7 MSTORE PUSH1 0x4 DUP2 MSTORE DUP5 DUP7 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SLOAD DUP5 MSTORE PUSH1 0x5 SWAP1 SWAP2 MSTORE SWAP2 KECCAK256 SSTORE JUMP JUMPDEST PUSH1 0x0 DUP2 DUP2 SSTORE TIMESTAMP PUSH1 0x1 DUP2 DUP2 SSTORE PUSH1 0x2 DUP1 SLOAD SWAP1 SWAP2 ADD DUP1 DUP3 SSTORE DUP4 MSTORE PUSH1 0x3 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP6 KECCAK256 SWAP6 SWAP1 SWAP6 SSTORE SWAP1 SLOAD DUP4 MSTORE PUSH1 0x4 SWAP1 MSTORE SWAP2 SWAP1 KECCAK256 SSTORE JUMP JUMPDEST PUSH1 0x3 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH19 0xF52103E03348EBFD7AF101AF8F067CFA7FA957 KECCAK256 0x4D 0xB0 0xE2 0xCE 0x48 SHL LOG1 0x1F 0xD SWAP14 DUP15 PUSH5 0x736F6C6343 STOP MOD MOD STOP CALLER ",
   "sourceMap": "341:1021:50:-:0;;;685:89;5:9:-1;2:2;;;27:1;24;17:12;2:2;685:89:50;;;;;;;;;;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;685:89:50;741:28;685:89;-1:-1:-1;;;;;741:12:50;:28;:::i;:::-;685:89;341:1021;;778:231;837:12;:22;;;883:15;865;:33;;;904:11;:13;;;;;;;;923:22;;:9;:22;;;;;;;;:32;;;;974:11;;961:25;;:12;:25;;;;;:43;778:231::o;341:1021::-;;;;;;;"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c80639ab29f451161005b5780639ab29f45146100ac578063a87a20ce146100dd578063b5ab58dc146100fa578063b633620c146101175761007d565b806350d25bcd14610082578063668a0f021461009c5780638205bf6a146100a4575b600080fd5b61008a610134565b60408051918252519081900360200190f35b61008a61013a565b61008a610140565b6100db600480360360808110156100c257600080fd5b5080359060208101359060408101359060600135610146565b005b6100db600480360360208110156100f357600080fd5b5035610184565b61008a6004803603602081101561011057600080fd5b50356101b9565b61008a6004803603602081101561012d57600080fd5b50356101cb565b60005481565b60025481565b60015481565b600284815560008481556001849055948552600360209081526040808720959095558154865260048152848620939093555484526005909152912055565b600081815542600181815560028054909101808255835260036020908152604080852095909555905483526004905291902055565b60036020526000908152604090205481565b6004602052600090815260409020548156fea264697066735822122072f52103e03348ebfd7af101af8f067cfa7fa957204db0e2ce481ba11f0d9d8e64736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x7D JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x9AB29F45 GT PUSH2 0x5B JUMPI DUP1 PUSH4 0x9AB29F45 EQ PUSH2 0xAC JUMPI DUP1 PUSH4 0xA87A20CE EQ PUSH2 0xDD JUMPI DUP1 PUSH4 0xB5AB58DC EQ PUSH2 0xFA JUMPI DUP1 PUSH4 0xB633620C EQ PUSH2 0x117 JUMPI PUSH2 0x7D JUMP JUMPDEST DUP1 PUSH4 0x50D25BCD EQ PUSH2 0x82 JUMPI DUP1 PUSH4 0x668A0F02 EQ PUSH2 0x9C JUMPI DUP1 PUSH4 0x8205BF6A EQ PUSH2 0xA4 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x8A PUSH2 0x134 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x8A PUSH2 0x13A JUMP JUMPDEST PUSH2 0x8A PUSH2 0x140 JUMP JUMPDEST PUSH2 0xDB PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x80 DUP2 LT ISZERO PUSH2 0xC2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 DUP2 ADD CALLDATALOAD SWAP1 PUSH1 0x40 DUP2 ADD CALLDATALOAD SWAP1 PUSH1 0x60 ADD CALLDATALOAD PUSH2 0x146 JUMP JUMPDEST STOP JUMPDEST PUSH2 0xDB PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0xF3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x184 JUMP JUMPDEST PUSH2 0x8A PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x110 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x1B9 JUMP JUMPDEST PUSH2 0x8A PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x12D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x1CB JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 DUP5 DUP2 SSTORE PUSH1 0x0 DUP5 DUP2 SSTORE PUSH1 0x1 DUP5 SWAP1 SSTORE SWAP5 DUP6 MSTORE PUSH1 0x3 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP8 KECCAK256 SWAP6 SWAP1 SWAP6 SSTORE DUP2 SLOAD DUP7 MSTORE PUSH1 0x4 DUP2 MSTORE DUP5 DUP7 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SLOAD DUP5 MSTORE PUSH1 0x5 SWAP1 SWAP2 MSTORE SWAP2 KECCAK256 SSTORE JUMP JUMPDEST PUSH1 0x0 DUP2 DUP2 SSTORE TIMESTAMP PUSH1 0x1 DUP2 DUP2 SSTORE PUSH1 0x2 DUP1 SLOAD SWAP1 SWAP2 ADD DUP1 DUP3 SSTORE DUP4 MSTORE PUSH1 0x3 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP6 KECCAK256 SWAP6 SWAP1 SWAP6 SSTORE SWAP1 SLOAD DUP4 MSTORE PUSH1 0x4 SWAP1 MSTORE SWAP2 SWAP1 KECCAK256 SSTORE JUMP JUMPDEST PUSH1 0x3 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH19 0xF52103E03348EBFD7AF101AF8F067CFA7FA957 KECCAK256 0x4D 0xB0 0xE2 0xCE 0x48 SHL LOG1 0x1F 0xD SWAP14 DUP15 PUSH5 0x736F6C6343 STOP MOD MOD STOP CALLER ",
   "sourceMap": "341:1021:50:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;341:1021:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;394:35:50;;;:::i;:::-;;;;;;;;;;;;;;;;476;;;:::i;433:39::-;;;:::i;1013:347::-;;;;;;15:3:-1;10;7:12;4:2;;;32:1;29;22:12;4:2;-1:-1;1013:347:50;;;;;;;;;;;;;;;;;:::i;:::-;;778:231;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;778:231:50;;:::i;516:52::-;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;516:52:50;;:::i;572:56::-;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;572:56:50;;:::i;394:35::-;;;;:::o;476:::-;;;;:::o;433:39::-;;;;:::o;1013:347::-;1145:11;:22;;;1173:12;:22;;;1201:15;:28;;;1235:22;;;:9;:22;;;;;;;;:32;;;;1286:11;;1273:25;;:12;:25;;;;;:38;;;;1330:11;1317:25;;:12;:25;;;;;:38;1013:347::o;778:231::-;837:12;:22;;;883:15;865;:33;;;904:11;:13;;;;;;;;923:22;;:9;:22;;;;;;;;:32;;;;974:11;;961:25;;:12;:25;;;;;:43;778:231::o;516:52::-;;;;;;;;;;;;;:::o;572:56::-;;;;;;;;;;;;;:::o"
  },
  "methodIdentifiers": {
   "getAnswer(uint256)": "b5ab58dc",
   "getTimestamp(uint256)": "b633620c",
   "latestAnswer()": "50d25bcd",
   "latestRound()": "668a0f02",
   "latestTimestamp()": "8205bf6a",
   "updateAnswer(int256)": "a87a20ce",
   "updateRoundData(uint256,int256,uint256,uint256)": "9ab29f45"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_initialAnswer\",\"type\":\"int256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"int256\",\"name\":\"current\",\"type\":\"int256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"roundId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"}],\"name\":\"AnswerUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"roundId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"startedBy\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"}],\"name\":\"NewRound\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"getAnswer\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"getTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestAnswer\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestRound\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_answer\",\"type\":\"int256\"}],\"name\":\"updateAnswer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_roundId\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_answer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_timestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_startedAt\",\"type\":\"uint256\"}],\"name\":\"updateRoundData\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{},\"title\":\"MockV2Aggregator\"},\"userdoc\":{\"methods\":{},\"notice\":\"Based on the HistoricAggregator contractUse this contract when you need to test other contract's ability to read data from an aggregator contract, but how the aggregator got its answer is unimportant\"}},\"settings\":{\"compilationTarget\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/tests/MockV2Aggregator.sol\":\"MockV2Aggregator\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/interfaces/AggregatorInterface.sol\":{\"keccak256\":\"0x0e9b789c2f1b93d4d6ee417aa08531597a62b8e141b745d69ac3d10cda8d590e\",\"urls\":[\"bzz-raw://5fa4cb3b8b628a737c8695c90d818b80b4938677e07dbdc8156982210a3f5466\",\"dweb:/ipfs/QmPf4zA3ymoWQmzNzi7BvNe74zQ6MpasC7txUmr5Vo2Nsg\"]},\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/tests/MockV2Aggregator.sol\":{\"keccak256\":\"0x149a61e8e42e9959340ad0866c6e07b8615c943e559040070cfd86ebb4f77873\",\"urls\":[\"bzz-raw://75e1ef3cc1f020cd7cb610d54194d86c45c01107d85af78d69e8132a9131b3c6\",\"dweb:/ipfs/QmQ7apaqCK3TmWvU3DByj6hqdSeaJYZitAYX8xVLMVqHAs\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('MockV2Aggregator.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.MockV2Aggregator = MockV2Aggregator
