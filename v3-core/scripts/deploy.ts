import { ethers } from 'hardhat'

async function main() {
  const factoryFactory = await ethers.getContractFactory('PhoswapV3Factory')
  const factory = await factoryFactory.deploy()
  console.log('PhoswapV3Factory deployed to:', factory.address)

  const poolDepFactory = await ethers.getContractFactory('PhoswapV3PoolDeployer')
  const poolDeployer = await poolDepFactory.deploy()
  console.log('PhoswapV3PoolDeployer deployed to:', poolDeployer.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
