# nft-merkle-proof

**This project is example of minting token by merkle tree**

## How To Run This Project

### Installation
```shell
yarn install
```

### Compile Smart Contract
```shell
$ npx hardhat compile
```

### Test Smart Contract
```shell
$ npx hardhat test
```

## Test Smart Contract With Coverage
```shell
$ npx hardhat coverage
```

### Deploy Smart Contract(local)
```shell
# 啟動本地測試鏈
$ npx hardhat node 
# 取得測試鏈中的account,
# 並修改DaiwanNFT.deploy.ts/DaiwanNFT.freeMint.ts中的whitelist
$ npx hardhat accounts 
# 部署DaiwanNFT contract,
# 並且修正DaiwanNFT.freeMint.ts/DaiwanNFT.checkToken.ts中的contractAddress
$ npx hardhat run scripts/DaiwanNFT.deploy.ts
# DaiwanNFT free mint 
$ npx hardhat run scripts/DaiwanNFT.freeMint.ts
# 檢查DaiwanNFT 的token balance
$ npx hardhat run scripts/DaiwanNFT.checkToken.ts
```

### Other
```shell
npx hardhat accounts
npx hardhat clean
npx hardhat help
```
