# NftCreator
This is the repo to create NFTs on EVM compatible blockchains (able to run solidity code).

# how to run on cloud
1. clone the code in your system.
2. Install all the dependencies by running : npm install
3. Run the server by connecting to Alfajores network by running `npx hardhat run --network alfajores app.js`

# how to run on local system
1. clone the code in your system.
2. Install all the dependencies by running : `npm install`
3. start a local blockchain by running `npx hardhat node`
4. In another terminal window compile the smart contract, `npx hardhat compile`
5. deploy the smart contract on local blockchain, `npx hardhat run --network localhost scripts/deploy.js`

By now following things are happening in your system:
1. a local blockchain is running
2. smart contracts under the directory contracts/solidity have been deployed on this blockchain

Next:
start your nodeJs server by running `npx hardhat run --network localhost app.js`

Now, you nodeJs server is running at port 3000.

# making REST request to createNFTs to the server
1. Curl to create a NFT token
```
curl --location --request POST 'http://api.nftoncelo.com/createNft' \
--form 'file=@"/Users/vg/Downloads/beautiful-mehndi.jpeg"' \
--form 'mintTo="0x0fe7103cBaB645095B68E6f415cB46d6e0d82C97"' \
--form 'name="Mehndi"' \
--form 'description="day 2 "'
```
Note: update the file location to the file on your system

2. curl to query the owner of a token Id
```
curl --location --request POST 'http://api.nftoncelo.com/ownerOf' \
--header 'Content-Type: application/json' \
--data-raw '{
    "tokenId" : 13
}'
```

3. curl to get the URI of the token
```
curl --location --request POST 'http://api.nftoncelo.com/tokenURI' \
--header 'Content-Type: application/json' \
--data-raw '{
    "tokenId" : 13
}'
```

paste the request curl in the postman and you will be able to interact with NFT smart contract deployed.

