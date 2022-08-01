import { ethers } from "hardhat";
import MerkleTree from "merkletreejs";
import keccak256 from "keccak256";

async function main() {

  const [user1]=await ethers.getSigners();
  const contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const nft=await ethers.getContractAt("DaiwanNFT",contractAddress,user1)

  const whitelist = [
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
  ]
  const hashList=whitelist.map((address)=>keccak256(address))
  const tree=new MerkleTree(hashList,keccak256,{sortPairs: true})
  const proof=tree.getHexProof(keccak256(user1.address));
  console.log(proof);
  const rep=await nft.freeMint(proof);
  const txn=await rep.wait();

  //
  // const nft = await DaiwanNFT.deploy(`0x${root}`);
  //
  // await nft.deployed();
  // // console.log(contract);
  // // console.log(nft);
  // console.log("deployed nft contract :", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
