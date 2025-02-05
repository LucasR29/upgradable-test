import { ethers, upgrades } from "hardhat";

export async function main() {
    console.log('Deploying SimpleOwnable...');

    const Box = await ethers.getContractFactory("UpgradableBox")
    const box = await upgrades.deployProxy(Box, [42])
    const t  = await box.waitForDeployment()

    console.log("Box deployed to:", await box.getAddress())
}

main();
