import { ethers, upgrades } from "hardhat";
import dotenv from "dotenv";

dotenv.config();

async function main(address: string) {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    const box = await upgrades.upgradeProxy(address, BoxV2)
    console.log("Box upgraded")
}

main(process.env.ADDRESS!);