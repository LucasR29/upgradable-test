import { HardhatUserConfig } from "hardhat/config";
import AnyflowHardhatConfig from "./anyflow.config"
import "@nomicfoundation/hardhat-toolbox";

const PRIVATE_KEY = "492d6458025abeb13dd2e177c8bbefd5678f6b40dfc0b9b752978465b9d3f968";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    "80002": {
      url: "https://rpc-amoy.polygon.technology",
      accounts: [PRIVATE_KEY],
      chainId: 80002,
    },
    "sepolia": {
      url: "https://sepolia.drpc.org",
      accounts: [PRIVATE_KEY],
      chainId: 11155111
    }
  },
};

export default config;
