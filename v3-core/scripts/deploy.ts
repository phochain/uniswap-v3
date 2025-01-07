import { ethers } from 'hardhat'

async function main() {
  const factoryFactory = await ethers.getContractFactory('UniswapV3Factory')
  const factory = await factoryFactory.deploy()
  console.log('UniswapV3Factory deployed to:', factory.address)

  const poolDepFactory = await ethers.getContractFactory('UniswapV3PoolDeployer')
  const poolDeployer = await poolDepFactory.deploy()
  console.log('UniswapV3PoolDeployer deployed to:', poolDeployer.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
