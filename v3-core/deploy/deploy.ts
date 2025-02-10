import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async ({ deployments, ethers }) => {
  const { deploy } = deployments;

  await deploy('UniswapV3Factory', {
    from: (await ethers.getSigners())[0].address,
    log: true,
  });
}
