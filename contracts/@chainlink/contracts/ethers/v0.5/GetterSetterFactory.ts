/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { GetterSetter } from "./GetterSetter";

export class GetterSetterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<GetterSetter> {
    return super.deploy(overrides) as Promise<GetterSetter>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): GetterSetter {
    return super.attach(address) as GetterSetter;
  }
  connect(signer: Signer): GetterSetterFactory {
    return super.connect(signer) as GetterSetterFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GetterSetter {
    return new Contract(address, _abi, signerOrProvider) as GetterSetter;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "requestId",
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getBytes",
    outputs: [
      {
        name: "",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getBytes32",
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "requestedUint256",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "_value",
        type: "bytes"
      }
    ],
    name: "requestedBytes",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getUint256",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_value",
        type: "bytes32"
      }
    ],
    name: "setBytes32",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "setUint256",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_value",
        type: "bytes"
      }
    ],
    name: "setBytes",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "_value",
        type: "bytes32"
      }
    ],
    name: "requestedBytes32",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "value",
        type: "bytes32"
      }
    ],
    name: "SetBytes32",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "value",
        type: "uint256"
      }
    ],
    name: "SetUint256",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "bytes"
      }
    ],
    name: "SetBytes",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "b32",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "u256",
        type: "uint256"
      },
      {
        indexed: false,
        name: "b322",
        type: "bytes32"
      }
    ],
    name: "Output",
    type: "event"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610670806100206000396000f3fe6080604052600436106100a25763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416626d6cae81146100a75780630bcd3b33146100ce5780631f903037146101585780633345b4d01461016d57806346ddd1ff1461019f5780636889597914610259578063c2b12a731461026e578063d2282dc514610298578063da359dc8146102c2578063ed53e51114610375575b600080fd5b3480156100b357600080fd5b506100bc6103a5565b60408051918252519081900360200190f35b3480156100da57600080fd5b506100e36103ab565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561011d578181015183820152602001610105565b50505050905090810190601f16801561014a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016457600080fd5b506100bc610457565b34801561017957600080fd5b5061019d6004803603604081101561019057600080fd5b508035906020013561045d565b005b3480156101ab57600080fd5b5061019d600480360360408110156101c257600080fd5b813591908101906040810160208201356401000000008111156101e457600080fd5b8201836020820111156101f657600080fd5b8035906020019184600183028401116401000000008311171561021857600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061046f945050505050565b34801561026557600080fd5b506100bc61047d565b34801561027a57600080fd5b5061019d6004803603602081101561029157600080fd5b5035610483565b3480156102a457600080fd5b5061019d600480360360208110156102bb57600080fd5b50356104b6565b3480156102ce57600080fd5b5061019d600480360360208110156102e557600080fd5b81019060208101813564010000000081111561030057600080fd5b82018360208201111561031257600080fd5b8035906020019184600183028401116401000000008311171561033457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506104eb945050505050565b34801561038157600080fd5b5061019d6004803603604081101561039857600080fd5b508035906020013561059b565b60025481565b6003805460408051602060026001851615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f8101849004840282018401909252818152929183018282801561044f5780601f106104245761010080835404028352916020019161044f565b820191906000526020600020905b81548152906001019060200180831161043257829003601f168201915b505050505081565b60005481565b600282905561046b816104b6565b5050565b600282905561046b816104eb565b60015481565b6000818155604051829133917fdc73ee99832252105ed74a404690c2f10ad1b294cbbeb0ff5cded48ef2aa437d9190a350565b6001819055604051819033907fd943f063acdb1c6f206cf6a3f6d1ba39687bcc07feb7f44019bdbd4773c9c28d90600090a350565b80516104fe9060039060208401906105a9565b50604080516020808252835181830152835133937ff22a519d38e59bc517532f666f8da532fdd5356e68d617191e82a8fdcc8abdcf9386939092839283019185019080838360005b8381101561055e578181015183820152602001610546565b50505050905090810190601f16801561058b5780820380516001836020036101000a031916815260200191505b509250505060405180910390a250565b600282905561046b81610483565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106105ea57805160ff1916838001178555610617565b82800160010185558215610617579182015b828111156106175782518255916020019190600101906105fc565b50610623929150610627565b5090565b61064191905b80821115610623576000815560010161062d565b9056fea165627a7a723058208257f47433fdfa710733d8c05153dc043cee9b637c45792ce99d9dcb37ae56b60029";