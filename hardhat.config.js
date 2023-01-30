require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "rYqxCsF-53stbqJTocIUSM8RDkTjCCof";

const GOERLI_PRIVATE_KEY = "90b1076365b1140e7ff7869074494120ee07aae757ffb872568597c85b92b287";


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
