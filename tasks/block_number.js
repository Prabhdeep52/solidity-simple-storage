const{task } = require("hardhat.config") ;

task("block-number" , " prints the block number").setaction(
    //task("name of task", "description of task")

    async (taskArgs , hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber() 
        console.log(`current block number is : ${blockNumber}`)
    }
)