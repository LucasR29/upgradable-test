import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

const PRIVATE_KEY = "492d6458025abeb13dd2e177c8bbefd5678f6b40dfc0b9b752978465b9d3f968";

type HardhatUserConfigUpgradable = HardhatUserConfig & {
  defender: {
    apiKey: string,
    apiSecret: string
  }
}

const config: HardhatUserConfigUpgradable = {
  solidity: {
    compilers: [
      { version: "0.8.28" },
      { version: "0.6.0" }
    ]
  },
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
  defender: {
    apiKey: "FCPL1LUFr6TgJYHjvzWv81CBdrL2Xo9L",
    apiSecret: "67PAYS6sic9yLE44UkMpYQfXi6oMvVfHfWyjAq8uiUf8rkhKzUgTeF5Fupw8LzBr"
  }
};

export default config;
