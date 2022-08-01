import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";

describe("DaiwanNFT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshopt in every test.
  async function deployDaiwanNFTFixture() {
    const whitelist = [
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    ]
    const hashList = whitelist.map((address) => keccak256(address))
    const tree = new MerkleTree(hashList, keccak256, {sortPairs: true})
    const root = tree.getRoot().toString('hex')
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const DaiwanNFT = await ethers.getContractFactory("DaiwanNFT");
    const nft = await DaiwanNFT.deploy(`0x${root}`);

    return { nft, tree, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right root", async function () {
      const { nft, tree } = await loadFixture(deployDaiwanNFTFixture);
      const root = tree.getRoot().toString('hex')
      expect(await nft.root()).to.equal(`0x${root}`);
    });
  });

});
