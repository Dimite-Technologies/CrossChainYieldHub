const hre = require("hardhat");

async function testSigner() {
    try {
        const [signer] = await hre.ethers.getSigners();
        console.log("Signer Address:", signer.address);
    } catch (error) {
        console.error("Error fetching signer:", error);
    }
}

testSigner();
