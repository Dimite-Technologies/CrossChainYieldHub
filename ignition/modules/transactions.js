// Import required libraries
const hre = require("hardhat");
const ethers = hre.ethers;

async function attachYieldAggregator() {
    try {
        // Get the first signer (account)
        const [signer] = await ethers.getSigners();

        // Specify the contract address
        const yieldAggregatorAddress = "0xd52D2CA7975Cfbc3342863A1B76d21104a5C8266";

        // Get the contract ABI 
        // Option 1: If you have the compiled artifacts
        const YieldAggregator = await ethers.getContractFactory("YieldAggregator");
        
        // Attach the contract using the ABI and address
        const yieldAggregator = YieldAggregator.attach(yieldAggregatorAddress);


        // Verify the contract connection
        console.log("Yield Aggregator Contract Address:", yieldAggregator.target);

        // Example of interacting with the contract
        try {
            // Call a view function (if available)
            const someViewFunction = await yieldAggregator.someViewFunction();
            console.log("View Function Result:", someViewFunction);
        } catch (interactionError) {
            console.error("Error interacting with contract:", interactionError);
        }

        return yieldAggregator;
    } catch (error) {
        console.error("Error attaching YieldAggregator contract:", error);
        throw error;
    }
}

// Export the function if you want to use it in other files
module.exports = attachYieldAggregator;

// If running directly, call the function
if (require.main === module) {
    attachYieldAggregator()
        .then(() => process.exit(0))
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
}