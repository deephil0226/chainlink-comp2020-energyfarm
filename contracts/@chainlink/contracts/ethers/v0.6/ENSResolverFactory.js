"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class ENSResolverFactory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ENSResolverFactory = ENSResolverFactory;
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "addr",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRU5TUmVzb2x2ZXJGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRU5TUmVzb2x2ZXJGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7QUFDMUMsb0JBQW9COztBQUVwQixtQ0FBMEM7QUFLMUMsTUFBYSxrQkFBa0I7SUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FDWixPQUFlLEVBQ2YsZ0JBQW1DO1FBRW5DLE9BQU8sSUFBSSxpQkFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQWdCLENBQUM7SUFDdEUsQ0FBQztDQUNGO0FBUEQsZ0RBT0M7QUFFRCxNQUFNLElBQUksR0FBRztJQUNYO1FBQ0UsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRTtZQUNQO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsZUFBZSxFQUFFLE1BQU07UUFDdkIsSUFBSSxFQUFFLFVBQVU7S0FDakI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2VuZXJhdGVkIGJ5IHRzLWdlbmVyYXRvciB2ZXIuIDAuMC44ICovXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyBDb250cmFjdCwgU2lnbmVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzL3Byb3ZpZGVyc1wiO1xuXG5pbXBvcnQgeyBFTlNSZXNvbHZlciB9IGZyb20gXCIuL0VOU1Jlc29sdmVyXCI7XG5cbmV4cG9ydCBjbGFzcyBFTlNSZXNvbHZlckZhY3Rvcnkge1xuICBzdGF0aWMgY29ubmVjdChcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgc2lnbmVyT3JQcm92aWRlcjogU2lnbmVyIHwgUHJvdmlkZXJcbiAgKTogRU5TUmVzb2x2ZXIge1xuICAgIHJldHVybiBuZXcgQ29udHJhY3QoYWRkcmVzcywgX2FiaSwgc2lnbmVyT3JQcm92aWRlcikgYXMgRU5TUmVzb2x2ZXI7XG4gIH1cbn1cblxuY29uc3QgX2FiaSA9IFtcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYnl0ZXMzMlwiLFxuICAgICAgICBuYW1lOiBcIm5vZGVcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiYWRkclwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH1cbl07XG4iXX0=