const { ethers } = require("hardhat");

async function main() {

  const AiOracleAddress = "0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7";
  const BridgeContractAddress = "0xYourBridgeContractAddress";
  const DexAggregatorAddress = "0xYourDexAggregatorAddress";

    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const balance = await deployer.getBalance();
    console.log("Account balance:", ethers.utils.formatEther(balance), "ETH");

    // Deploy YieldAggregator
    const YieldAggregator = await ethers.getContractFactory("YieldAggregator");
    const yieldAggregator = await YieldAggregator.deploy("0xYourAiOracleAddress");
    await yieldAggregator.deployed();
    console.log("YieldAggregator deployed to:", yieldAggregator.address);

    // Deploy CrossChainLiquidityAggregator
    const CrossChainLiquidityAggregator = await ethers.getContractFactory(
        "CrossChainLiquidityAggregator"
    );
    const crossChainLiquidityAggregator = await CrossChainLiquidityAggregator.deploy(
        "0xYourBridgeContractAddress",
        "0xYourDexAggregatorAddress"
    );
    await crossChainLiquidityAggregator.deployed();
    console.log(
        "CrossChainLiquidityAggregator deployed to:",
        crossChainLiquidityAggregator.address
    );

    // Deploy MEVProtection
    const MEVProtection = await ethers.getContractFactory("MEVProtection");
    const mevProtection = await MEVProtection.deploy();
    await mevProtection.deployed();
    console.log("MEVProtection deployed to:", mevProtection.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
