import { ethers, defender } from "hardhat";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV3");

  const proposal = await defender.proposeUpgradeWithApproval('0x1dd6fa7E2Ac881250015683FDB64a1dEad0f77B5', BoxV2);

  console.log(`Upgrade proposed with URL: ${proposal.url}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});