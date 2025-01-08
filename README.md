# Uniswap V3 deploy

## Deploy v3-core

Open `v3-core` folder

Run following command:
```sh
yarn
export PRIVATE_KEY={deploy private key}
yarn hardhat run scripts/deploy.ts --network customChain
```

## Deploy v3-periphery

Open `v3-periphery` folder 

Open `scripts/deploy.ts` file

Change `config` variables as follow:
- `uniswapFactory` should be deployed `UniswapV3Factory` address
- `nativeCurrencyLabel` should be token of new network

After that run following command:
```sh
yarn
export PRIVATE_KEY={deploy private key}
yarn hardhat run scripts/deploy.ts --network customChain
```