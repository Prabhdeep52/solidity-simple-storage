const { EtherscanProvider } = require("@ethersproject/providers");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config() ;
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block_number");
require("hardhat-gas-reporter") ; 
require("solidity-coverage") ; 

/** @type import('hardhat/config').HardhatUserConfig */

const goeri_rpc_url = process.env.goerli_rpc_url 
const private_key = process.env.private_key
const etherscan_api_key = process.env.etherscan_api_key 
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat" , 
  networks: {
    goerli:{
         url : goeri_rpc_url , 
         accounts: [private_key] ,
         chainId : 5 ,  
    },
    localhost:{
        url : hhtp , 
        chainId : 31337 , 
    }
  } ,  
  etherscan: {
    // Your API key for Etherscan
    apiKey: "etherscan_api_key" , 
  } , 
  gasReporter : {
    enabled : true , 
    outputFile: "gas_report.txt" , 
    noColours : true  ,
  }
};
