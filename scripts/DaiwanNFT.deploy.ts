import {ethers} from "hardhat";
import MerkleTree from "merkletreejs";
import keccak256 from "keccak256";

async function main() {
    const DaiwanNFT = await ethers.getContractFactory("DaiwanNFT");

    const whitelist = [
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    ]
    const hashList = whitelist.map((address) => keccak256(address))
    const tree = new MerkleTree(hashList, keccak256, {sortPairs: true})
    const root = tree.getRoot().toString('hex')
    console.log(root);

    const nft = await DaiwanNFT.deploy(`0x${root}`);

    await nft.deployed();
    console.log("deployed nft contract :", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
