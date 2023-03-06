// imports
const { ethers , run, network } = require("hardhat")
require('hardhat.config');
// async main
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying contract...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.deployed()
    console.log(`Deployed contract to: ${simpleStorage.address}`)


//we will programmatically verify contract using hardhat plugin of etherscan , 
//refer https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan

// WE WILL ONLY VERIFY THE CONTRACT IF WE ARE ON A TESTNET ( LIKE GOERLI ) , 
// NOT WHEN WE ARE ON LOCAL HARDHAT NETWORK , SO WILL USE IF FUNCTION TO CHECK IF WE ARE ON GOERLI OR HARDHAT 


if (network.config.chainId == 5 && process.env.etherscan_api_key) {
  await simpleStorage,deployTransaction.wait(6) 
  await verify(simpleStorage.address() , [])
}


//interacting with contract 
const  currentValue = await simpleStorage.retrieve()
console.log(`current value is ${currentValue}`)

//updating thhe current value 
const transactionResponse = await simpleStorage.store(7)
await transactionResponse.wait(1) 
const updatedValue = await simpleStorage.retrieve()
console.log(`updated value is ${updatedValue}`)


}


/* if chain id = 5 (means if its goerli network) and if etherscan api key exists , then only it will call verify function
  it will wait for 6 blocks also before calling verify  */

async function verify(contractAddress , args){
      console.log("verifying contract......")
      try {
      await run("verify:verify" , {
           address : contractAddress , 
           constructorArguments : args , 
      })
    } catch(e) {
      if(e.message.toLowerCase().includes("already verified")){
        console.log("already verified")
      } else {
        console.log(e) 
      }
    }
  /* try and catch: firstly it will try to verify , then catch will check if the message given by e (output)
   contains words like already verified , if so , we will print it , else we will print the normal e . */
}


// main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })