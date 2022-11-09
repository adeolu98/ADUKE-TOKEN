import { HardhatUserConfig } from "hardhat/config";

import "@typechain/hardhat";
import "hardhat-contract-sizer";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-etherscan";

import { config as dotenv } from "dotenv";

dotenv({ path: "./.env.local" });

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1_000_000,
      },
    },
  },
  defaultNetwork: "hardhat",
  paths: {
    tests: "./tests",
  },
  networks: {
    hardhat: {
      // allowUnlimitedContractSize: true, // if you use this, the contract will not deploy on 'real' chains
    },
    polygon: {
      url: process.env.POLYGON_RPC_URL,
      accounts: [process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY: '' ],
    },
  },
  typechain: {
    outDir: "./types",
  },
  etherscan: {
    apiKey: process.env.NEXT_PUBLIC_POLYGON_MAINNET_ETHERSCAN_API_KEY,
  },
};

export default config;
