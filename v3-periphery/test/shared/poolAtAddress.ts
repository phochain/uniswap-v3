import { abi as POOL_ABI } from '@uniswap/v3-core/artifacts/contracts/PhoswapV3Pool.sol/PhoswapV3Pool.json'
import { Contract, Wallet } from 'ethers'
import { IPhoswapV3Pool } from '../../typechain'

export default function poolAtAddress(address: string, wallet: Wallet): IPhoswapV3Pool {
  return new Contract(address, POOL_ABI, wallet) as IPhoswapV3Pool
}
