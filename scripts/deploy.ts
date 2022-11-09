import { ethers } from "hardhat";

async function main() {
  const Token = await ethers.getContractFactory("Aduke");
  const token = await Token.deploy();

  await token.deployed();

  console.log(`token deployed at ${token.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
