/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle")
 require("@nomiclabs/hardhat-etherscan");

//  npx hardhat verify --constructor-args arguments.js "CONTRACT ADDRESS" --network kovan

 const CONFIG = require("./credentials.js");
 
 module.exports = {
    solidity: "0.7.3",
    networks: {
        hardhat: {
            blockGasLimit: 10000000000000,
            allowUnlimitedContractSize: true,
            timeout: 1000000000000,
            accounts: {
                accountsBalance: "100000000000000000000000",
                count: 20,
            },
        },
        kovan: {
        url: `https://kovan.infura.io/v3/${CONFIG.infura.mainEndpoint}`,
        accounts: [`${CONFIG.wallet.PKEY}`],
        gasPrice: 30000000000,

        },
    },
    etherscan: {
        apiKey: `${CONFIG.etherscan.KEY}`
    }
 };
 
 
