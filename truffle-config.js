require("dotenv").config();
//const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    mocha: {
      enableTimeouts: false,
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(process.env.PRIVATE_KEY, process.env.INFURA_URL),
      network_id: 1,
    },
    mainnetFork: {
      host: "127.0.0.1",
      port: 8545,
      gasPrice: 80000000000,
      network_id: "*",
      skipDryRun: true,
      networkCheckTimeout: 1000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.6.9",
    },
  },
};