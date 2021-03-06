"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class MigrationsFactory extends ethers_1.ContractFactory {
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
exports.MigrationsFactory = MigrationsFactory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "new_address",
                type: "address"
            }
        ],
        name: "upgrade",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "last_completed_migration",
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
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                name: "",
                type: "address"
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
                name: "completed",
                type: "uint256"
            }
        ],
        name: "setCompleted",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    }
];
const _bytecode = "0x608060405234801561001057600080fd5b5060008054600160a060020a0319163317905561025d806100326000396000f3fe6080604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630900f0108114610066578063445df0ac146100a85780638da5cb5b146100cf578063fdacd5761461010d575b600080fd5b34801561007257600080fd5b506100a66004803603602081101561008957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610137565b005b3480156100b457600080fd5b506100bd6101ea565b60408051918252519081900360200190f35b3480156100db57600080fd5b506100e46101f0565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561011957600080fd5b506100a66004803603602081101561013057600080fd5b503561020c565b60005473ffffffffffffffffffffffffffffffffffffffff163314156101e75760008190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b1580156101cd57600080fd5b505af11580156101e1573d6000803e3d6000fd5b50505050505b50565b60015481565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff163314156101e75760015556fea165627a7a723058204df67d30fa02f86f0ea1906bb9029d8eea87bec9a5be80e8bd61dde1996959990029";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uc0ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNaWdyYXRpb25zRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQTBDO0FBQzFDLG9CQUFvQjs7QUFFcEIsbUNBQTJEO0FBTzNELE1BQWEsaUJBQWtCLFNBQVEsd0JBQWU7SUFDcEQsWUFBWSxNQUFlO1FBQ3pCLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBZ0M7UUFDckMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBd0IsQ0FBQztJQUN4RCxDQUFDO0lBQ0Qsb0JBQW9CLENBQUMsU0FBZ0M7UUFDbkQsT0FBTyxLQUFLLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFlO1FBQ3BCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQWUsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsT0FBTyxDQUFDLE1BQWM7UUFDcEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBc0IsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FDWixPQUFlLEVBQ2YsZ0JBQW1DO1FBRW5DLE9BQU8sSUFBSSxpQkFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQWUsQ0FBQztJQUNyRSxDQUFDO0NBQ0Y7QUF2QkQsOENBdUJDO0FBRUQsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLFFBQVEsRUFBRSxLQUFLO1FBQ2YsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxFQUFFLEtBQUs7UUFDZCxlQUFlLEVBQUUsWUFBWTtRQUM3QixJQUFJLEVBQUUsVUFBVTtLQUNqQjtJQUNEO1FBQ0UsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSwwQkFBMEI7UUFDaEMsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELE9BQU8sRUFBRSxLQUFLO1FBQ2QsZUFBZSxFQUFFLE1BQU07UUFDdkIsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBTSxFQUFFLEVBQUU7UUFDVixJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRTtZQUNOO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsSUFBSSxFQUFFLGNBQWM7UUFDcEIsT0FBTyxFQUFFLEVBQUU7UUFDWCxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxZQUFZO1FBQzdCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsRUFBRTtRQUNWLE9BQU8sRUFBRSxLQUFLO1FBQ2QsZUFBZSxFQUFFLFlBQVk7UUFDN0IsSUFBSSxFQUFFLGFBQWE7S0FDcEI7Q0FDRixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQ2Isa3lDQUFreUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYXRlZCBieSB0cy1nZW5lcmF0b3IgdmVyLiAwLjAuOCAqL1xuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHsgQ29udHJhY3QsIENvbnRyYWN0RmFjdG9yeSwgU2lnbmVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgVW5zaWduZWRUcmFuc2FjdGlvbiB9IGZyb20gXCJldGhlcnMvdXRpbHMvdHJhbnNhY3Rpb25cIjtcblxuaW1wb3J0IHsgVHJhbnNhY3Rpb25PdmVycmlkZXMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgTWlncmF0aW9ucyB9IGZyb20gXCIuL01pZ3JhdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIE1pZ3JhdGlvbnNGYWN0b3J5IGV4dGVuZHMgQ29udHJhY3RGYWN0b3J5IHtcbiAgY29uc3RydWN0b3Ioc2lnbmVyPzogU2lnbmVyKSB7XG4gICAgc3VwZXIoX2FiaSwgX2J5dGVjb2RlLCBzaWduZXIpO1xuICB9XG5cbiAgZGVwbG95KG92ZXJyaWRlcz86IFRyYW5zYWN0aW9uT3ZlcnJpZGVzKTogUHJvbWlzZTxNaWdyYXRpb25zPiB7XG4gICAgcmV0dXJuIHN1cGVyLmRlcGxveShvdmVycmlkZXMpIGFzIFByb21pc2U8TWlncmF0aW9ucz47XG4gIH1cbiAgZ2V0RGVwbG95VHJhbnNhY3Rpb24ob3ZlcnJpZGVzPzogVHJhbnNhY3Rpb25PdmVycmlkZXMpOiBVbnNpZ25lZFRyYW5zYWN0aW9uIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RGVwbG95VHJhbnNhY3Rpb24ob3ZlcnJpZGVzKTtcbiAgfVxuICBhdHRhY2goYWRkcmVzczogc3RyaW5nKTogTWlncmF0aW9ucyB7XG4gICAgcmV0dXJuIHN1cGVyLmF0dGFjaChhZGRyZXNzKSBhcyBNaWdyYXRpb25zO1xuICB9XG4gIGNvbm5lY3Qoc2lnbmVyOiBTaWduZXIpOiBNaWdyYXRpb25zRmFjdG9yeSB7XG4gICAgcmV0dXJuIHN1cGVyLmNvbm5lY3Qoc2lnbmVyKSBhcyBNaWdyYXRpb25zRmFjdG9yeTtcbiAgfVxuICBzdGF0aWMgY29ubmVjdChcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgc2lnbmVyT3JQcm92aWRlcjogU2lnbmVyIHwgUHJvdmlkZXJcbiAgKTogTWlncmF0aW9ucyB7XG4gICAgcmV0dXJuIG5ldyBDb250cmFjdChhZGRyZXNzLCBfYWJpLCBzaWduZXJPclByb3ZpZGVyKSBhcyBNaWdyYXRpb25zO1xuICB9XG59XG5cbmNvbnN0IF9hYmkgPSBbXG4gIHtcbiAgICBjb25zdGFudDogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwibmV3X2FkZHJlc3NcIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwidXBncmFkZVwiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHBheWFibGU6IGZhbHNlLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBjb25zdGFudDogdHJ1ZSxcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwibGFzdF9jb21wbGV0ZWRfbWlncmF0aW9uXCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIlxuICAgICAgfVxuICAgIF0sXG4gICAgcGF5YWJsZTogZmFsc2UsXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGNvbnN0YW50OiB0cnVlLFxuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJvd25lclwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHBheWFibGU6IGZhbHNlLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBjb25zdGFudDogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiY29tcGxldGVkXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcInNldENvbXBsZXRlZFwiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHBheWFibGU6IGZhbHNlLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIHBheWFibGU6IGZhbHNlLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJjb25zdHJ1Y3RvclwiXG4gIH1cbl07XG5cbmNvbnN0IF9ieXRlY29kZSA9XG4gIFwiMHg2MDgwNjA0MDUyMzQ4MDE1NjEwMDEwNTc2MDAwODBmZDViNTA2MDAwODA1NDYwMDE2MGEwNjAwMjBhMDMxOTE2MzMxNzkwNTU2MTAyNWQ4MDYxMDAzMjYwMDAzOTYwMDBmM2ZlNjA4MDYwNDA1MjYwMDQzNjEwNjEwMDYxNTc2M2ZmZmZmZmZmN2MwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjAwMDM1MDQxNjYzMDkwMGYwMTA4MTE0NjEwMDY2NTc4MDYzNDQ1ZGYwYWMxNDYxMDBhODU3ODA2MzhkYTVjYjViMTQ2MTAwY2Y1NzgwNjNmZGFjZDU3NjE0NjEwMTBkNTc1YjYwMDA4MGZkNWIzNDgwMTU2MTAwNzI1NzYwMDA4MGZkNWI1MDYxMDBhNjYwMDQ4MDM2MDM2MDIwODExMDE1NjEwMDg5NTc2MDAwODBmZDViNTAzNTczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2NjEwMTM3NTY1YjAwNWIzNDgwMTU2MTAwYjQ1NzYwMDA4MGZkNWI1MDYxMDBiZDYxMDFlYTU2NWI2MDQwODA1MTkxODI1MjUxOTA4MTkwMDM2MDIwMDE5MGYzNWIzNDgwMTU2MTAwZGI1NzYwMDA4MGZkNWI1MDYxMDBlNDYxMDFmMDU2NWI2MDQwODA1MTczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjkwOTIxNjgyNTI1MTkwODE5MDAzNjAyMDAxOTBmMzViMzQ4MDE1NjEwMTE5NTc2MDAwODBmZDViNTA2MTAwYTY2MDA0ODAzNjAzNjAyMDgxMTAxNTYxMDEzMDU3NjAwMDgwZmQ1YjUwMzU2MTAyMGM1NjViNjAwMDU0NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTYzMzE0MTU2MTAxZTc1NzYwMDA4MTkwNTA4MDczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2NjNmZGFjZDU3NjYwMDE1NDYwNDA1MTgyNjNmZmZmZmZmZjE2N2MwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDI4MTUyNjAwNDAxODA4MjgxNTI2MDIwMDE5MTUwNTA2MDAwNjA0MDUxODA4MzAzODE2MDAwODc4MDNiMTU4MDE1NjEwMWNkNTc2MDAwODBmZDViNTA1YWYxMTU4MDE1NjEwMWUxNTczZDYwMDA4MDNlM2Q2MDAwZmQ1YjUwNTA1MDUwNTA1YjUwNTY1YjYwMDE1NDgxNTY1YjYwMDA1NDczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2ODE1NjViNjAwMDU0NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTYzMzE0MTU2MTAxZTc1NzYwMDE1NTU2ZmVhMTY1NjI3YTdhNzIzMDU4MjA0ZGY2N2QzMGZhMDJmODZmMGVhMTkwNmJiOTAyOWQ4ZWVhODdiZWM5YTViZTgwZThiZDYxZGRlMTk5Njk1OTk5MDAyOVwiO1xuIl19