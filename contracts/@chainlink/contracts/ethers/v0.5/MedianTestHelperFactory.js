"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class MedianTestHelperFactory extends ethers_1.ContractFactory {
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
exports.MedianTestHelperFactory = MedianTestHelperFactory;
const _abi = [
    {
        constant: true,
        inputs: [
            {
                name: "_list",
                type: "int256[]"
            }
        ],
        name: "publicGet",
        outputs: [
            {
                name: "",
                type: "int256"
            }
        ],
        payable: false,
        stateMutability: "pure",
        type: "function"
    }
];
const _bytecode = "0x608060405234801561001057600080fd5b50610699806100206000396000f3fe6080604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663115efb208114610045575b600080fd5b34801561005157600080fd5b506100f56004803603602081101561006857600080fd5b81019060208101813564010000000081111561008357600080fd5b82018360208201111561009557600080fd5b803590602001918460208302840111640100000000831117156100b757600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610107945050505050565b60408051918252519081900360200190f35b60006101128261011a565b90505b919050565b80516000908161013182600263ffffffff6101d016565b90506002820615156101b257600061015161014b86610258565b836102d4565b9050600061016f8661016a85600163ffffffff6104bb16565b6102d4565b905060006002808407818407010590506101a68161019a60028505600287059063ffffffff61053616565b9063ffffffff61053616565b95505050505050610115565b6101c78461016a83600163ffffffff6104bb16565b92505050610115565b600080821161024057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b6000828481151561024d57fe5b049150505b92915050565b6060808251604051908082528060200260200182016040528015610286578160200160208202803883390190505b50905060005b83518110156102cd5783818151811015156102a357fe5b9060200190602002015182828151811015156102bb57fe5b6020908102909101015260010161028c565b5092915050565b8151604080518281526020808402820101909152600091849184919060609082801561030a578160200160208202803883390190505b509050606082604051908082528060200260200182016040528015610339578160200160208202803883390190505b5090506000806000805b8861035588600263ffffffff6101d016565b8151811061035f57fe5b9060200190602002015191506000935060009250600090505b868110156104385781898281518110151561038f57fe5b9060200190602002015112156103da5788818151811015156103ad57fe5b9060200190602002015186858151811015156103c557fe5b60209081029091010152600190930192610430565b8189828151811015156103e957fe5b90602001906020020151131561043057888181518110151561040757fe5b90602001906020020151858481518110151561041f57fe5b602090810290910101526001909201915b600101610378565b8388116104565783965061044c89876105f3565b90995095506104b6565b610466878463ffffffff6105f616565b8811156104a65761048d610480888563ffffffff6105f616565b899063ffffffff6105f616565b975082965061049c89866105f3565b90995094506104b6565b5097506102529650505050505050565b610343565b60008282018381101561052f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600082820181831280159061054b5750838112155b80610560575060008312801561056057508381125b151561052f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f60448201527f7700000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b91565b60008282111561066757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fea165627a7a723058207a7519ae5e562e00da79463a7292f94391933b72687c7ae0ff45905155e69d8c0029";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFuVGVzdEhlbHBlckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNZWRpYW5UZXN0SGVscGVyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQTBDO0FBQzFDLG9CQUFvQjs7QUFFcEIsbUNBQTJEO0FBTzNELE1BQWEsdUJBQXdCLFNBQVEsd0JBQWU7SUFDMUQsWUFBWSxNQUFlO1FBQ3pCLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBZ0M7UUFDckMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBOEIsQ0FBQztJQUM5RCxDQUFDO0lBQ0Qsb0JBQW9CLENBQUMsU0FBZ0M7UUFDbkQsT0FBTyxLQUFLLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFlO1FBQ3BCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQXFCLENBQUM7SUFDbkQsQ0FBQztJQUNELE9BQU8sQ0FBQyxNQUFjO1FBQ3BCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQTRCLENBQUM7SUFDMUQsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQ1osT0FBZSxFQUNmLGdCQUFtQztRQUVuQyxPQUFPLElBQUksaUJBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFxQixDQUFDO0lBQzNFLENBQUM7Q0FDRjtBQXZCRCwwREF1QkM7QUFFRCxNQUFNLElBQUksR0FBRztJQUNYO1FBQ0UsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUU7WUFDTjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsVUFBVTthQUNqQjtTQUNGO1FBQ0QsSUFBSSxFQUFFLFdBQVc7UUFDakIsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFFBQVE7YUFDZjtTQUNGO1FBQ0QsT0FBTyxFQUFFLEtBQUs7UUFDZCxlQUFlLEVBQUUsTUFBTTtRQUN2QixJQUFJLEVBQUUsVUFBVTtLQUNqQjtDQUNGLENBQUM7QUFFRixNQUFNLFNBQVMsR0FDYixzM0dBQXMzRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2VuZXJhdGVkIGJ5IHRzLWdlbmVyYXRvciB2ZXIuIDAuMC44ICovXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyBDb250cmFjdCwgQ29udHJhY3RGYWN0b3J5LCBTaWduZXIgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJldGhlcnMvcHJvdmlkZXJzXCI7XG5pbXBvcnQgeyBVbnNpZ25lZFRyYW5zYWN0aW9uIH0gZnJvbSBcImV0aGVycy91dGlscy90cmFuc2FjdGlvblwiO1xuXG5pbXBvcnQgeyBUcmFuc2FjdGlvbk92ZXJyaWRlcyB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBNZWRpYW5UZXN0SGVscGVyIH0gZnJvbSBcIi4vTWVkaWFuVGVzdEhlbHBlclwiO1xuXG5leHBvcnQgY2xhc3MgTWVkaWFuVGVzdEhlbHBlckZhY3RvcnkgZXh0ZW5kcyBDb250cmFjdEZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihzaWduZXI/OiBTaWduZXIpIHtcbiAgICBzdXBlcihfYWJpLCBfYnl0ZWNvZGUsIHNpZ25lcik7XG4gIH1cblxuICBkZXBsb3kob3ZlcnJpZGVzPzogVHJhbnNhY3Rpb25PdmVycmlkZXMpOiBQcm9taXNlPE1lZGlhblRlc3RIZWxwZXI+IHtcbiAgICByZXR1cm4gc3VwZXIuZGVwbG95KG92ZXJyaWRlcykgYXMgUHJvbWlzZTxNZWRpYW5UZXN0SGVscGVyPjtcbiAgfVxuICBnZXREZXBsb3lUcmFuc2FjdGlvbihvdmVycmlkZXM/OiBUcmFuc2FjdGlvbk92ZXJyaWRlcyk6IFVuc2lnbmVkVHJhbnNhY3Rpb24ge1xuICAgIHJldHVybiBzdXBlci5nZXREZXBsb3lUcmFuc2FjdGlvbihvdmVycmlkZXMpO1xuICB9XG4gIGF0dGFjaChhZGRyZXNzOiBzdHJpbmcpOiBNZWRpYW5UZXN0SGVscGVyIHtcbiAgICByZXR1cm4gc3VwZXIuYXR0YWNoKGFkZHJlc3MpIGFzIE1lZGlhblRlc3RIZWxwZXI7XG4gIH1cbiAgY29ubmVjdChzaWduZXI6IFNpZ25lcik6IE1lZGlhblRlc3RIZWxwZXJGYWN0b3J5IHtcbiAgICByZXR1cm4gc3VwZXIuY29ubmVjdChzaWduZXIpIGFzIE1lZGlhblRlc3RIZWxwZXJGYWN0b3J5O1xuICB9XG4gIHN0YXRpYyBjb25uZWN0KFxuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBzaWduZXJPclByb3ZpZGVyOiBTaWduZXIgfCBQcm92aWRlclxuICApOiBNZWRpYW5UZXN0SGVscGVyIHtcbiAgICByZXR1cm4gbmV3IENvbnRyYWN0KGFkZHJlc3MsIF9hYmksIHNpZ25lck9yUHJvdmlkZXIpIGFzIE1lZGlhblRlc3RIZWxwZXI7XG4gIH1cbn1cblxuY29uc3QgX2FiaSA9IFtcbiAge1xuICAgIGNvbnN0YW50OiB0cnVlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIl9saXN0XCIsXG4gICAgICAgIHR5cGU6IFwiaW50MjU2W11cIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJwdWJsaWNHZXRcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiaW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHBheWFibGU6IGZhbHNlLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJwdXJlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH1cbl07XG5cbmNvbnN0IF9ieXRlY29kZSA9XG4gIFwiMHg2MDgwNjA0MDUyMzQ4MDE1NjEwMDEwNTc2MDAwODBmZDViNTA2MTA2OTk4MDYxMDAyMDYwMDAzOTYwMDBmM2ZlNjA4MDYwNDA1MjYwMDQzNjEwNjEwMDQwNTc2M2ZmZmZmZmZmN2MwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjAwMDM1MDQxNjYzMTE1ZWZiMjA4MTE0NjEwMDQ1NTc1YjYwMDA4MGZkNWIzNDgwMTU2MTAwNTE1NzYwMDA4MGZkNWI1MDYxMDBmNTYwMDQ4MDM2MDM2MDIwODExMDE1NjEwMDY4NTc2MDAwODBmZDViODEwMTkwNjAyMDgxMDE4MTM1NjQwMTAwMDAwMDAwODExMTE1NjEwMDgzNTc2MDAwODBmZDViODIwMTgzNjAyMDgyMDExMTE1NjEwMDk1NTc2MDAwODBmZDViODAzNTkwNjAyMDAxOTE4NDYwMjA4MzAyODQwMTExNjQwMTAwMDAwMDAwODMxMTE3MTU2MTAwYjc1NzYwMDA4MGZkNWI5MTkwODA4MDYwMjAwMjYwMjAwMTYwNDA1MTkwODEwMTYwNDA1MjgwOTM5MjkxOTA4MTgxNTI2MDIwMDE4MzgzNjAyMDAyODA4Mjg0Mzc2MDAwOTIwMTkxOTA5MTUyNTA5Mjk1NTA2MTAxMDc5NDUwNTA1MDUwNTA1NjViNjA0MDgwNTE5MTgyNTI1MTkwODE5MDAzNjAyMDAxOTBmMzViNjAwMDYxMDExMjgyNjEwMTFhNTY1YjkwNTA1YjkxOTA1MDU2NWI4MDUxNjAwMDkwODE2MTAxMzE4MjYwMDI2M2ZmZmZmZmZmNjEwMWQwMTY1NjViOTA1MDYwMDI4MjA2MTUxNTYxMDFiMjU3NjAwMDYxMDE1MTYxMDE0Yjg2NjEwMjU4NTY1YjgzNjEwMmQ0NTY1YjkwNTA2MDAwNjEwMTZmODY2MTAxNmE4NTYwMDE2M2ZmZmZmZmZmNjEwNGJiMTY1NjViNjEwMmQ0NTY1YjkwNTA2MDAwNjAwMjgwODQwNzgxODQwNzAxMDU5MDUwNjEwMWE2ODE2MTAxOWE2MDAyODUwNTYwMDI4NzA1OTA2M2ZmZmZmZmZmNjEwNTM2MTY1NjViOTA2M2ZmZmZmZmZmNjEwNTM2MTY1NjViOTU1MDUwNTA1MDUwNTA2MTAxMTU1NjViNjEwMWM3ODQ2MTAxNmE4MzYwMDE2M2ZmZmZmZmZmNjEwNGJiMTY1NjViOTI1MDUwNTA2MTAxMTU1NjViNjAwMDgwODIxMTYxMDI0MDU3NjA0MDgwNTE3ZjA4YzM3OWEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4MTUyNjAyMDYwMDQ4MjAxNTI2MDFhNjAyNDgyMDE1MjdmNTM2MTY2NjU0ZDYxNzQ2ODNhMjA2NDY5NzY2OTczNjk2ZjZlMjA2Mjc5MjA3YTY1NzI2ZjAwMDAwMDAwMDAwMDYwNDQ4MjAxNTI5MDUxOTA4MTkwMDM2MDY0MDE5MGZkNWI2MDAwODI4NDgxMTUxNTYxMDI0ZDU3ZmU1YjA0OTE1MDUwNWI5MjkxNTA1MDU2NWI2MDYwODA4MjUxNjA0MDUxOTA4MDgyNTI4MDYwMjAwMjYwMjAwMTgyMDE2MDQwNTI4MDE1NjEwMjg2NTc4MTYwMjAwMTYwMjA4MjAyODAzODgzMzkwMTkwNTA1YjUwOTA1MDYwMDA1YjgzNTE4MTEwMTU2MTAyY2Q1NzgzODE4MTUxODExMDE1MTU2MTAyYTM1N2ZlNWI5MDYwMjAwMTkwNjAyMDAyMDE1MTgyODI4MTUxODExMDE1MTU2MTAyYmI1N2ZlNWI2MDIwOTA4MTAyOTA5MTAxMDE1MjYwMDEwMTYxMDI4YzU2NWI1MDkyOTE1MDUwNTY1YjgxNTE2MDQwODA1MTgyODE1MjYwMjA4MDg0MDI4MjAxMDE5MDkxNTI2MDAwOTE4NDkxODQ5MTkwNjA2MDkwODI4MDE1NjEwMzBhNTc4MTYwMjAwMTYwMjA4MjAyODAzODgzMzkwMTkwNTA1YjUwOTA1MDYwNjA4MjYwNDA1MTkwODA4MjUyODA2MDIwMDI2MDIwMDE4MjAxNjA0MDUyODAxNTYxMDMzOTU3ODE2MDIwMDE2MDIwODIwMjgwMzg4MzM5MDE5MDUwNWI1MDkwNTA2MDAwODA2MDAwODA1Yjg4NjEwMzU1ODg2MDAyNjNmZmZmZmZmZjYxMDFkMDE2NTY1YjgxNTE4MTEwNjEwMzVmNTdmZTViOTA2MDIwMDE5MDYwMjAwMjAxNTE5MTUwNjAwMDkzNTA2MDAwOTI1MDYwMDA5MDUwNWI4NjgxMTAxNTYxMDQzODU3ODE4OTgyODE1MTgxMTAxNTE1NjEwMzhmNTdmZTViOTA2MDIwMDE5MDYwMjAwMjAxNTExMjE1NjEwM2RhNTc4ODgxODE1MTgxMTAxNTE1NjEwM2FkNTdmZTViOTA2MDIwMDE5MDYwMjAwMjAxNTE4Njg1ODE1MTgxMTAxNTE1NjEwM2M1NTdmZTViNjAyMDkwODEwMjkwOTEwMTAxNTI2MDAxOTA5MzAxOTI2MTA0MzA1NjViODE4OTgyODE1MTgxMTAxNTE1NjEwM2U5NTdmZTViOTA2MDIwMDE5MDYwMjAwMjAxNTExMzE1NjEwNDMwNTc4ODgxODE1MTgxMTAxNTE1NjEwNDA3NTdmZTViOTA2MDIwMDE5MDYwMjAwMjAxNTE4NTg0ODE1MTgxMTAxNTE1NjEwNDFmNTdmZTViNjAyMDkwODEwMjkwOTEwMTAxNTI2MDAxOTA5MjAxOTE1YjYwMDEwMTYxMDM3ODU2NWI4Mzg4MTE2MTA0NTY1NzgzOTY1MDYxMDQ0Yzg5ODc2MTA1ZjM1NjViOTA5OTUwOTU1MDYxMDRiNjU2NWI2MTA0NjY4Nzg0NjNmZmZmZmZmZjYxMDVmNjE2NTY1Yjg4MTExNTYxMDRhNjU3NjEwNDhkNjEwNDgwODg4NTYzZmZmZmZmZmY2MTA1ZjYxNjU2NWI4OTkwNjNmZmZmZmZmZjYxMDVmNjE2NTY1Yjk3NTA4Mjk2NTA2MTA0OWM4OTg2NjEwNWYzNTY1YjkwOTk1MDk0NTA2MTA0YjY1NjViNTA5NzUwNjEwMjUyOTY1MDUwNTA1MDUwNTA1MDU2NWI2MTAzNDM1NjViNjAwMDgyODIwMTgzODExMDE1NjEwNTJmNTc2MDQwODA1MTdmMDhjMzc5YTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDIwNjAwNDgyMDE1MjYwMWI2MDI0ODIwMTUyN2Y1MzYxNjY2NTRkNjE3NDY4M2EyMDYxNjQ2NDY5NzQ2OTZmNmUyMDZmNzY2NTcyNjY2YzZmNzcwMDAwMDAwMDAwNjA0NDgyMDE1MjkwNTE5MDgxOTAwMzYwNjQwMTkwZmQ1YjkzOTI1MDUwNTA1NjViNjAwMDgyODIwMTgxODMxMjgwMTU5MDYxMDU0YjU3NTA4MzgxMTIxNTViODA2MTA1NjA1NzUwNjAwMDgzMTI4MDE1NjEwNTYwNTc1MDgzODExMjViMTUxNTYxMDUyZjU3NjA0MDgwNTE3ZjA4YzM3OWEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4MTUyNjAyMDYwMDQ4MjAxNTI2MDIxNjAyNDgyMDE1MjdmNTM2OTY3NmU2NTY0NTM2MTY2NjU0ZDYxNzQ2ODNhMjA2MTY0NjQ2OTc0Njk2ZjZlMjA2Zjc2NjU3MjY2NmM2ZjYwNDQ4MjAxNTI3Zjc3MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDY0ODIwMTUyOTA1MTkwODE5MDAzNjA4NDAxOTBmZDViOTE1NjViNjAwMDgyODIxMTE1NjEwNjY3NTc2MDQwODA1MTdmMDhjMzc5YTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDIwNjAwNDgyMDE1MjYwMWU2MDI0ODIwMTUyN2Y1MzYxNjY2NTRkNjE3NDY4M2EyMDczNzU2Mjc0NzI2MTYzNzQ2OTZmNmUyMDZmNzY2NTcyNjY2YzZmNzcwMDAwNjA0NDgyMDE1MjkwNTE5MDgxOTAwMzYwNjQwMTkwZmQ1YjUwOTAwMzkwNTZmZWExNjU2MjdhN2E3MjMwNTgyMDdhNzUxOWFlNWU1NjJlMDBkYTc5NDYzYTcyOTJmOTQzOTE5MzNiNzI2ODdjN2FlMGZmNDU5MDUxNTVlNjlkOGMwMDI5XCI7XG4iXX0=