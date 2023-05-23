const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("nftContract", function () {
  let nftContract;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    // Deploy the NFT contract before each test
    const NFTContract = await ethers.getContractFactory("nftContract");
    [owner, addr1, addr2] = await ethers.getSigners();

    nftContract = await NFTContract.deploy();
    await nftContract.deployed();
  });

  it("Should mint NFT with type 0", async function () {
    const tokenId = await nftContract.publicMint([0]);

    // Verify the minted NFT's type and ID
    expect(await nftContract.getTokenType(tokenId)).to.equal(0);
    expect(await nftContract.ownerOf(tokenId)).to.equal(owner.address);
  });

  it("Should mint NFT with type 1", async function () {
    const tokenId = await nftContract.publicMint([1]);

    // Verify the minted NFT's type and ID
    expect(await nftContract.getTokenType(tokenId)).to.equal(1);
    expect(await nftContract.ownerOf(tokenId)).to.equal(owner.address);
  });

  it("Should mint NFT with type 2", async function () {
    const tokenId = await nftContract.publicMint([2]);

    // Verify the minted NFT's type and ID
    expect(await nftContract.getTokenType(tokenId)).to.equal(2);
    expect(await nftContract.ownerOf(tokenId)).to.equal(owner.address);
  });

  it("Should mint NFT with multiple types", async function () {
    const tokenId = await nftContract.publicMint([0, 1, 2]);

    // Verify the minted NFTs' types and IDs
    expect(await nftContract.getTokenType(tokenId[0])).to.equal(0);
    expect(await nftContract.getTokenType(tokenId[1])).to.equal(1);
    expect(await nftContract.getTokenType(tokenId[2])).to.equal(2);

    // Verify the ownership of the minted NFTs
    expect(await nftContract.ownerOf(tokenId[0])).to.equal(owner.address);
    expect(await nftContract.ownerOf(tokenId[1])).to.equal(owner.address);
    expect(await nftContract.ownerOf(tokenId[2])).to.equal(owner.address);
  });
});
