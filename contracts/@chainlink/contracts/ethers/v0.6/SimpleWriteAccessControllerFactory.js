"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class SimpleWriteAccessControllerFactory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides);
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides);
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.SimpleWriteAccessControllerFactory = SimpleWriteAccessControllerFactory;
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "user",
                type: "address"
            }
        ],
        name: "AddedAccess",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [],
        name: "CheckAccessDisabled",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [],
        name: "CheckAccessEnabled",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            }
        ],
        name: "OwnershipTransferRequested",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "user",
                type: "address"
            }
        ],
        name: "RemovedAccess",
        type: "event"
    },
    {
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address"
            }
        ],
        name: "addAccess",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "checkEnabled",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "disableAccessCheck",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "enableAccessCheck",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        name: "hasAccess",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address"
            }
        ],
        name: "removeAccess",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
const _bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556001805460ff60a01b1916600160a01b1790556109b2806100456000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80638823da6c11610076578063a118f2491161005b578063a118f249146101fd578063dc7f012414610230578063f2fde38b14610238576100a3565b80638823da6c146101995780638da5cb5b146101cc576100a3565b80630a756983146100a85780636b14daf8146100b257806379ba5097146101895780638038e4a114610191575b600080fd5b6100b061026b565b005b610175600480360360408110156100c857600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561010057600080fd5b82018360208201111561011257600080fd5b8035906020019184600183028401116401000000008311171561013457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610368945050505050565b604080519115158252519081900360200190f35b6100b06103be565b6100b06104c0565b6100b0600480360360208110156101af57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166105d2565b6101d461070a565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100b06004803603602081101561021357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610726565b61017561085f565b6100b06004803603602081101561024e57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610880565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102f157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b60015474010000000000000000000000000000000000000000900460ff161561036657600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040517f3be8a977a014527b50ae38adda80b56911c267328965c98ddc385d248f53963890600090a15b565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604081205460ff16806103b7575060015474010000000000000000000000000000000000000000900460ff16155b9392505050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461044457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e657200000000000000000000604482015290519081900360640190fd5b60008054337fffffffffffffffffffffffff00000000000000000000000000000000000000008083168217845560018054909116905560405173ffffffffffffffffffffffffffffffffffffffff90921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b60005473ffffffffffffffffffffffffffffffffffffffff16331461054657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b60015474010000000000000000000000000000000000000000900460ff1661036657600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040517faebf329500988c6488a0074e5a0a9ff304561fc5c6fc877aeb1d59c8282c348090600090a1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461065857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604090205460ff16156107075773ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055815192835290517f3d68a6fce901d20453d1a7aa06bf3950302a735948037deb182a8db66df2a0d19281900390910190a15b50565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107ac57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604090205460ff166107075773ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055815192835290517f87286ad1f399c8e82bf0c4ef4fcdc570ea2e1e92176e5c848b6413545b885db49281900390910190a150565b60015474010000000000000000000000000000000000000000900460ff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461090657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a35056fea2646970667358221220653c897dbd1b7aef81d2783a287f321882b53d97abf3b357b539f8f4fe586eb364736f6c63430006060033";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlV3JpdGVBY2Nlc3NDb250cm9sbGVyRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNpbXBsZVdyaXRlQWNjZXNzQ29udHJvbGxlckZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBDQUEwQztBQUMxQyxvQkFBb0I7O0FBRXBCLG1DQUEyRDtBQU8zRCxNQUFhLGtDQUFtQyxTQUFRLHdCQUFlO0lBQ3JFLFlBQVksTUFBZTtRQUN6QixLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUNKLFNBQWdDO1FBRWhDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQXlDLENBQUM7SUFDekUsQ0FBQztJQUNELG9CQUFvQixDQUFDLFNBQWdDO1FBQ25ELE9BQU8sS0FBSyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBZTtRQUNwQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFnQyxDQUFDO0lBQzlELENBQUM7SUFDRCxPQUFPLENBQUMsTUFBYztRQUNwQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUF1QyxDQUFDO0lBQ3JFLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUNaLE9BQWUsRUFDZixnQkFBbUM7UUFFbkMsT0FBTyxJQUFJLGlCQUFRLENBQ2pCLE9BQU8sRUFDUCxJQUFJLEVBQ0osZ0JBQWdCLENBQ2MsQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUE3QkQsZ0ZBNkJDO0FBRUQsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLE1BQU0sRUFBRSxFQUFFO1FBQ1YsZUFBZSxFQUFFLFlBQVk7UUFDN0IsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLE9BQU8s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Q0FDRixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQ2Isay9KQUFrL0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYXRlZCBieSB0cy1nZW5lcmF0b3IgdmVyLiAwLjAuOCAqL1xuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHsgQ29udHJhY3QsIENvbnRyYWN0RmFjdG9yeSwgU2lnbmVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgVW5zaWduZWRUcmFuc2FjdGlvbiB9IGZyb20gXCJldGhlcnMvdXRpbHMvdHJhbnNhY3Rpb25cIjtcblxuaW1wb3J0IHsgVHJhbnNhY3Rpb25PdmVycmlkZXMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgU2ltcGxlV3JpdGVBY2Nlc3NDb250cm9sbGVyIH0gZnJvbSBcIi4vU2ltcGxlV3JpdGVBY2Nlc3NDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVXcml0ZUFjY2Vzc0NvbnRyb2xsZXJGYWN0b3J5IGV4dGVuZHMgQ29udHJhY3RGYWN0b3J5IHtcbiAgY29uc3RydWN0b3Ioc2lnbmVyPzogU2lnbmVyKSB7XG4gICAgc3VwZXIoX2FiaSwgX2J5dGVjb2RlLCBzaWduZXIpO1xuICB9XG5cbiAgZGVwbG95KFxuICAgIG92ZXJyaWRlcz86IFRyYW5zYWN0aW9uT3ZlcnJpZGVzXG4gICk6IFByb21pc2U8U2ltcGxlV3JpdGVBY2Nlc3NDb250cm9sbGVyPiB7XG4gICAgcmV0dXJuIHN1cGVyLmRlcGxveShvdmVycmlkZXMpIGFzIFByb21pc2U8U2ltcGxlV3JpdGVBY2Nlc3NDb250cm9sbGVyPjtcbiAgfVxuICBnZXREZXBsb3lUcmFuc2FjdGlvbihvdmVycmlkZXM/OiBUcmFuc2FjdGlvbk92ZXJyaWRlcyk6IFVuc2lnbmVkVHJhbnNhY3Rpb24ge1xuICAgIHJldHVybiBzdXBlci5nZXREZXBsb3lUcmFuc2FjdGlvbihvdmVycmlkZXMpO1xuICB9XG4gIGF0dGFjaChhZGRyZXNzOiBzdHJpbmcpOiBTaW1wbGVXcml0ZUFjY2Vzc0NvbnRyb2xsZXIge1xuICAgIHJldHVybiBzdXBlci5hdHRhY2goYWRkcmVzcykgYXMgU2ltcGxlV3JpdGVBY2Nlc3NDb250cm9sbGVyO1xuICB9XG4gIGNvbm5lY3Qoc2lnbmVyOiBTaWduZXIpOiBTaW1wbGVXcml0ZUFjY2Vzc0NvbnRyb2xsZXJGYWN0b3J5IHtcbiAgICByZXR1cm4gc3VwZXIuY29ubmVjdChzaWduZXIpIGFzIFNpbXBsZVdyaXRlQWNjZXNzQ29udHJvbGxlckZhY3Rvcnk7XG4gIH1cbiAgc3RhdGljIGNvbm5lY3QoXG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIHNpZ25lck9yUHJvdmlkZXI6IFNpZ25lciB8IFByb3ZpZGVyXG4gICk6IFNpbXBsZVdyaXRlQWNjZXNzQ29udHJvbGxlciB7XG4gICAgcmV0dXJuIG5ldyBDb250cmFjdChcbiAgICAgIGFkZHJlc3MsXG4gICAgICBfYWJpLFxuICAgICAgc2lnbmVyT3JQcm92aWRlclxuICAgICkgYXMgU2ltcGxlV3JpdGVBY2Nlc3NDb250cm9sbGVyO1xuICB9XG59XG5cbmNvbnN0IF9hYmkgPSBbXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJjb25zdHJ1Y3RvclwiXG4gIH0sXG4gIHtcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbmRleGVkOiBmYWxzZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJ1c2VyXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcIkFkZGVkQWNjZXNzXCIsXG4gICAgdHlwZTogXCJldmVudFwiXG4gIH0sXG4gIHtcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJDaGVja0FjY2Vzc0Rpc2FibGVkXCIsXG4gICAgdHlwZTogXCJldmVudFwiXG4gIH0sXG4gIHtcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJDaGVja0FjY2Vzc0VuYWJsZWRcIixcbiAgICB0eXBlOiBcImV2ZW50XCJcbiAgfSxcbiAge1xuICAgIGFub255bW91czogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICAgIG5hbWU6IFwiZnJvbVwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJ0b1wiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJPd25lcnNoaXBUcmFuc2ZlclJlcXVlc3RlZFwiLFxuICAgIHR5cGU6IFwiZXZlbnRcIlxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJmcm9tXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICBuYW1lOiBcInRvXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcIk93bmVyc2hpcFRyYW5zZmVycmVkXCIsXG4gICAgdHlwZTogXCJldmVudFwiXG4gIH0sXG4gIHtcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbmRleGVkOiBmYWxzZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJ1c2VyXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcIlJlbW92ZWRBY2Nlc3NcIixcbiAgICB0eXBlOiBcImV2ZW50XCJcbiAgfSxcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJhY2NlcHRPd25lcnNoaXBcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICAgIG5hbWU6IFwiX3VzZXJcIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiYWRkQWNjZXNzXCIsXG4gICAgb3V0cHV0czogW10sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJjaGVja0VuYWJsZWRcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJib29sXCIsXG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiYm9vbFwiXG4gICAgICB9XG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcImRpc2FibGVBY2Nlc3NDaGVja1wiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwiZW5hYmxlQWNjZXNzQ2hlY2tcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICAgIG5hbWU6IFwiX3VzZXJcIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJieXRlc1wiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiaGFzQWNjZXNzXCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYm9vbFwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImJvb2xcIlxuICAgICAgfVxuICAgIF0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJvd25lclwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJfdXNlclwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJyZW1vdmVBY2Nlc3NcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICAgIG5hbWU6IFwiX3RvXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcInRyYW5zZmVyT3duZXJzaGlwXCIsXG4gICAgb3V0cHV0czogW10sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfVxuXTtcblxuY29uc3QgX2J5dGVjb2RlID1cbiAgXCIweDYwODA2MDQwNTIzNDgwMTU2MTAwMTA1NzYwMDA4MGZkNWI1MDYwMDA4MDU0NjAwMTYwMDE2MGEwMWIwMzE5MTYzMzE3OTA1NTYwMDE4MDU0NjBmZjYwYTAxYjE5MTY2MDAxNjBhMDFiMTc5MDU1NjEwOWIyODA2MTAwNDU2MDAwMzk2MDAwZjNmZTYwODA2MDQwNTIzNDgwMTU2MTAwMTA1NzYwMDA4MGZkNWI1MDYwMDQzNjEwNjEwMGEzNTc2MDAwMzU2MGUwMWM4MDYzODgyM2RhNmMxMTYxMDA3NjU3ODA2M2ExMThmMjQ5MTE2MTAwNWI1NzgwNjNhMTE4ZjI0OTE0NjEwMWZkNTc4MDYzZGM3ZjAxMjQxNDYxMDIzMDU3ODA2M2YyZmRlMzhiMTQ2MTAyMzg1NzYxMDBhMzU2NWI4MDYzODgyM2RhNmMxNDYxMDE5OTU3ODA2MzhkYTVjYjViMTQ2MTAxY2M1NzYxMDBhMzU2NWI4MDYzMGE3NTY5ODMxNDYxMDBhODU3ODA2MzZiMTRkYWY4MTQ2MTAwYjI1NzgwNjM3OWJhNTA5NzE0NjEwMTg5NTc4MDYzODAzOGU0YTExNDYxMDE5MTU3NWI2MDAwODBmZDViNjEwMGIwNjEwMjZiNTY1YjAwNWI2MTAxNzU2MDA0ODAzNjAzNjA0MDgxMTAxNTYxMDBjODU3NjAwMDgwZmQ1YjczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjgyMzUxNjkxOTA4MTAxOTA2MDQwODEwMTYwMjA4MjAxMzU2NDAxMDAwMDAwMDA4MTExMTU2MTAxMDA1NzYwMDA4MGZkNWI4MjAxODM2MDIwODIwMTExMTU2MTAxMTI1NzYwMDA4MGZkNWI4MDM1OTA2MDIwMDE5MTg0NjAwMTgzMDI4NDAxMTE2NDAxMDAwMDAwMDA4MzExMTcxNTYxMDEzNDU3NjAwMDgwZmQ1YjkxOTA4MDgwNjAxZjAxNjAyMDgwOTEwNDAyNjAyMDAxNjA0MDUxOTA4MTAxNjA0MDUyODA5MzkyOTE5MDgxODE1MjYwMjAwMTgzODM4MDgyODQzNzYwMDA5MjAxOTE5MDkxNTI1MDkyOTU1MDYxMDM2ODk0NTA1MDUwNTA1MDU2NWI2MDQwODA1MTkxMTUxNTgyNTI1MTkwODE5MDAzNjAyMDAxOTBmMzViNjEwMGIwNjEwM2JlNTY1YjYxMDBiMDYxMDRjMDU2NWI2MTAwYjA2MDA0ODAzNjAzNjAyMDgxMTAxNTYxMDFhZjU3NjAwMDgwZmQ1YjUwMzU3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjYxMDVkMjU2NWI2MTAxZDQ2MTA3MGE1NjViNjA0MDgwNTE3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY5MDkyMTY4MjUyNTE5MDgxOTAwMzYwMjAwMTkwZjM1YjYxMDBiMDYwMDQ4MDM2MDM2MDIwODExMDE1NjEwMjEzNTc2MDAwODBmZDViNTAzNTczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2NjEwNzI2NTY1YjYxMDE3NTYxMDg1ZjU2NWI2MTAwYjA2MDA0ODAzNjAzNjAyMDgxMTAxNTYxMDI0ZTU3NjAwMDgwZmQ1YjUwMzU3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjYxMDg4MDU2NWI2MDAwNTQ3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjMzMTQ2MTAyZjE1NzYwNDA4MDUxN2YwOGMzNzlhMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODE1MjYwMjA2MDA0ODIwMTUyNjAxNjYwMjQ4MjAxNTI3ZjRmNmU2Yzc5MjA2MzYxNmM2YzYxNjI2YzY1MjA2Mjc5MjA2Zjc3NmU2NTcyMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDQ0ODIwMTUyOTA1MTkwODE5MDAzNjA2NDAxOTBmZDViNjAwMTU0NzQwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA5MDA0NjBmZjE2MTU2MTAzNjY1NzYwMDE4MDU0N2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMDBmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY5MDU1NjA0MDUxN2YzYmU4YTk3N2EwMTQ1MjdiNTBhZTM4YWRkYTgwYjU2OTExYzI2NzMyODk2NWM5OGRkYzM4NWQyNDhmNTM5NjM4OTA2MDAwOTBhMTViNTY1YjczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjgyMTY2MDAwOTA4MTUyNjAwMjYwMjA1MjYwNDA4MTIwNTQ2MGZmMTY4MDYxMDNiNzU3NTA2MDAxNTQ3NDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDkwMDQ2MGZmMTYxNTViOTM5MjUwNTA1MDU2NWI2MDAxNTQ3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjMzMTQ2MTA0NDQ1NzYwNDA4MDUxN2YwOGMzNzlhMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODE1MjYwMjA2MDA0ODIwMTUyNjAxNjYwMjQ4MjAxNTI3ZjRkNzU3Mzc0MjA2MjY1MjA3MDcyNmY3MDZmNzM2NTY0MjA2Zjc3NmU2NTcyMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDQ0ODIwMTUyOTA1MTkwODE5MDAzNjA2NDAxOTBmZDViNjAwMDgwNTQzMzdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgwODMxNjgyMTc4NDU1NjAwMTgwNTQ5MDkxMTY5MDU1NjA0MDUxNzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmOTA5MjE2OTI5MDkxODM5MTdmOGJlMDA3OWM1MzE2NTkxNDEzNDRjZDFmZDBhNGYyODQxOTQ5N2Y5NzIyYTNkYWFmZTNiNDE4NmY2YjY0NTdlMDkxYTM1MDU2NWI2MDAwNTQ3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjMzMTQ2MTA1NDY1NzYwNDA4MDUxN2YwOGMzNzlhMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODE1MjYwMjA2MDA0ODIwMTUyNjAxNjYwMjQ4MjAxNTI3ZjRmNmU2Yzc5MjA2MzYxNmM2YzYxNjI2YzY1MjA2Mjc5MjA2Zjc3NmU2NTcyMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDQ0ODIwMTUyOTA1MTkwODE5MDAzNjA2NDAxOTBmZDViNjAwMTU0NzQwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA5MDA0NjBmZjE2NjEwMzY2NTc2MDAxODA1NDdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjAwZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2NzQwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxNzkwNTU2MDQwNTE3ZmFlYmYzMjk1MDA5ODhjNjQ4OGEwMDc0ZTVhMGE5ZmYzMDQ1NjFmYzVjNmZjODc3YWViMWQ1OWM4MjgyYzM0ODA5MDYwMDA5MGExNTY1YjYwMDA1NDczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2MzMxNDYxMDY1ODU3NjA0MDgwNTE3ZjA4YzM3OWEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4MTUyNjAyMDYwMDQ4MjAxNTI2MDE2NjAyNDgyMDE1MjdmNGY2ZTZjNzkyMDYzNjE2YzZjNjE2MjZjNjUyMDYyNzkyMDZmNzc2ZTY1NzIwMDAwMDAwMDAwMDAwMDAwMDAwMDYwNDQ4MjAxNTI5MDUxOTA4MTkwMDM2MDY0MDE5MGZkNWI3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY4MTE2NjAwMDkwODE1MjYwMDI2MDIwNTI2MDQwOTAyMDU0NjBmZjE2MTU2MTA3MDc1NzczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjgxMTY2MDAwODE4MTUyNjAwMjYwMjA5MDgxNTI2MDQwOTE4MjkwMjA4MDU0N2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjAwMTY5MDU1ODE1MTkyODM1MjkwNTE3ZjNkNjhhNmZjZTkwMWQyMDQ1M2QxYTdhYTA2YmYzOTUwMzAyYTczNTk0ODAzN2RlYjE4MmE4ZGI2NmRmMmEwZDE5MjgxOTAwMzkwOTEwMTkwYTE1YjUwNTY1YjYwMDA1NDczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2ODE1NjViNjAwMDU0NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTYzMzE0NjEwN2FjNTc2MDQwODA1MTdmMDhjMzc5YTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDIwNjAwNDgyMDE1MjYwMTY2MDI0ODIwMTUyN2Y0ZjZlNmM3OTIwNjM2MTZjNmM2MTYyNmM2NTIwNjI3OTIwNmY3NzZlNjU3MjAwMDAwMDAwMDAwMDAwMDAwMDAwNjA0NDgyMDE1MjkwNTE5MDgxOTAwMzYwNjQwMTkwZmQ1YjczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjgxMTY2MDAwOTA4MTUyNjAwMjYwMjA1MjYwNDA5MDIwNTQ2MGZmMTY2MTA3MDc1NzczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjgxMTY2MDAwODE4MTUyNjAwMjYwMjA5MDgxNTI2MDQwOTE4MjkwMjA4MDU0N2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjAwMTY2MDAxMTc5MDU1ODE1MTkyODM1MjkwNTE3Zjg3Mjg2YWQxZjM5OWM4ZTgyYmYwYzRlZjRmY2RjNTcwZWEyZTFlOTIxNzZlNWM4NDhiNjQxMzU0NWI4ODVkYjQ5MjgxOTAwMzkwOTEwMTkwYTE1MDU2NWI2MDAxNTQ3NDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDkwMDQ2MGZmMTY4MTU2NWI2MDAwNTQ3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjMzMTQ2MTA5MDY1NzYwNDA4MDUxN2YwOGMzNzlhMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODE1MjYwMjA2MDA0ODIwMTUyNjAxNjYwMjQ4MjAxNTI3ZjRmNmU2Yzc5MjA2MzYxNmM2YzYxNjI2YzY1MjA2Mjc5MjA2Zjc3NmU2NTcyMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDQ0ODIwMTUyOTA1MTkwODE5MDAzNjA2NDAxOTBmZDViNjAwMTgwNTQ3ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxNjczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjgzODExNjkxODIxNzkwOTI1NTYwMDA4MDU0NjA0MDUxOTI5MzE2OTE3ZmVkODg4OWY1NjAzMjZlYjEzODkyMGQ4NDIxOTJmMGViM2RkMjJiNGYxMzljODdhMmM1NzUzOGUwNWJhZTEyNzg5MTkwYTM1MDU2ZmVhMjY0Njk3MDY2NzM1ODIyMTIyMDY1M2M4OTdkYmQxYjdhZWY4MWQyNzgzYTI4N2YzMjE4ODJiNTNkOTdhYmYzYjM1N2I1MzlmOGY0ZmU1ODZlYjM2NDczNmY2YzYzNDMwMDA2MDYwMDMzXCI7XG4iXX0=