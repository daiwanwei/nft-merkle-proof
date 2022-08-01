import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    ganache: {
      url: "http://localhost:8545/",
    }
  },
};

export default config;
