import { ethers } from 'hardhat'

const config = {
  uniswapFactory: '0xB54EdF813844aE56891ae3137eBD6Ee4f82D0E70',
  nativeCurrencyLabel: ethers.utils.formatBytes32String('PHO'),
}

async function main() {
  console.log(config)

  const multicall2Factory = await ethers.getContractFactory('Multicall2')
  const multicall2 = await multicall2Factory.deploy()
  await multicall2.deployed()
  console.log('Multicall2 deployed to:', multicall2.address)

  const weth9Factory = await ethers.getContractFactory('WETH9')
  const weth9 = await weth9Factory.deploy()
  await weth9.deployed()
  console.log('WETH9 deployed to:', weth9.address)

  const swapRouterFactory = await ethers.getContractFactory('SwapRouter')
  const swapRouter = await swapRouterFactory.deploy(config.uniswapFactory, weth9.address)
  await swapRouter.deployed()
  console.log('SwapRouter deployed to:', swapRouter.address)

  const nftDescriptorFactory = await ethers.getContractFactory('NFTDescriptor')
  const nftDescriptor = await nftDescriptorFactory.deploy()
  await nftDescriptor.deployed()
  console.log('NFTDescriptor deployed to:', nftDescriptor.address)

  const nonfungibleTokenPositionDescriptorFactory = await ethers.getContractFactory(
    'NonfungibleTokenPositionDescriptor',
    {
      libraries: {
        NFTDescriptor: nftDescriptor.address,
      },
    }
  )
  const nonfungibleTokenPositionDescriptor = await nonfungibleTokenPositionDescriptorFactory.deploy(
    weth9.address,
    config.nativeCurrencyLabel
  )
  await nonfungibleTokenPositionDescriptor.deployed()
  console.log('NonfungibleTokenPositionDescriptor deployed to:', nonfungibleTokenPositionDescriptor.address)

  const nonfungiblePositonManagerFactory = await ethers.getContractFactory('NonfungiblePositionManager')
  const nonfungiblePositionManager = await nonfungiblePositonManagerFactory.deploy(
    config.uniswapFactory,
    weth9.address,
    nonfungibleTokenPositionDescriptor.address
  )
  await nonfungiblePositionManager.deployed()
  console.log('NonfungiblePositionManager deployed to:', nonfungiblePositionManager.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
