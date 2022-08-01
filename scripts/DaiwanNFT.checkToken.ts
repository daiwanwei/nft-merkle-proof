import { ethers } from "hardhat";
import MerkleTree from "merkletreejs";
import keccak256 from "keccak256";

async function main() {

  const [user1]=await ethers.getSigners();
  const contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const nft=await ethers.getContractAt("DaiwanNFT",contractAddress,user1)

  const balance=await nft.balanceOf(user1.address);
  console.log(`user(${user1.address}),balance(${balance})`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
