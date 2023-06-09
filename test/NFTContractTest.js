const { expect } = require("chai");
const { ethers } = require("hardhat");
const BigNumber = ethers.BigNumber;
//constants:
let type0Price = new BigNumber.from("1000000000000000");
let type1Price = new BigNumber.from("2000000000000000");
let type2Price = new BigNumber.from("3000000000000000");

// describe("nftContract(Normal miting)", function () {
//   let nftContract;
//   let owner;
//   let addr1;
//   let addr2;
//   let addr3;

//   beforeEach(async function () {
//     // Deploy the NFT contract before each test
//     const NFTContract = await ethers.getContractFactory("NFTContract");
//     [owner, addr1, addr2, addr3] = await ethers.getSigners();

//     nftContract = await NFTContract.deploy();
//     await nftContract.deployed();
//   });

//   it("Should mint NFT with type 0", async function () {
//     const tx = await nftContract.publicMint([0], [], {
//       value: type0Price,
//     });
//     await tx.wait();

//     // Get the transaction receipt
//     const receipt = await ethers.provider.getTransactionReceipt(tx.hash);

//     // Retrieve the minted token IDs from the event logs
//     const eventTopic = ethers.utils.id("NFTsMinted(address,uint256[])");
//     const eventLog = receipt.logs.find((log) =>
//       log.topics.includes(eventTopic)
//     );
//     const eventData = nftContract.interface.parseLog(eventLog);

//     const mintedTokenIDs = eventData.args[1]; // Array of minted token IDs

//     const tokenId = mintedTokenIDs[0];

//     const tokenType = await nftContract.getTokenType(tokenId);
//     expect(tokenType).to.equal(0);
//   });
//   it("Should mint NFT with type 1", async function () {
//     const tx = await nftContract.publicMint([1], [], {
//       value: type1Price,
//     });
//     await tx.wait();

//     // Get the transaction receipt
//     const receipt = await ethers.provider.getTransactionReceipt(tx.hash);

//     // Retrieve the minted token IDs from the event logs
//     const eventTopic = ethers.utils.id("NFTsMinted(address,uint256[])");
//     const eventLog = receipt.logs.find((log) =>
//       log.topics.includes(eventTopic)
//     );
//     const eventData = nftContract.interface.parseLog(eventLog);

//     const mintedTokenIDs = eventData.args[1]; // Array of minted token IDs

//     tokenId = mintedTokenIDs[0];

//     const tokenType = await nftContract.getTokenType(tokenId);
//     expect(tokenType).to.equal(1);
//   });
//   it("Should mint NFT with type 2", async function () {
//     const tx = await nftContract.publicMint([2], [], {
//       value: type2Price,
//     });
//     await tx.wait();

//     // Get the transaction receipt
//     const receipt = await ethers.provider.getTransactionReceipt(tx.hash);

//     // Retrieve the minted token IDs from the event logs
//     const eventTopic = ethers.utils.id("NFTsMinted(address,uint256[])");
//     const eventLog = receipt.logs.find((log) =>
//       log.topics.includes(eventTopic)
//     );
//     const eventData = nftContract.interface.parseLog(eventLog);

//     const mintedTokenIDs = eventData.args[1]; // Array of minted token IDs

//     tokenId = mintedTokenIDs[0];

//     const tokenType = await nftContract.getTokenType(tokenId);
//     expect(tokenType).to.equal(2);
//   });
//   it("Should mint NFTs with type 0 and 1", async function () {
//     const totalCost = type0Price.add(type1Price);
//     const tx = await nftContract.publicMint([0, 1], [], {
//       value: totalCost,
//     });
//     await tx.wait();

//     // Get the transaction receipt
//     const receipt = await ethers.provider.getTransactionReceipt(tx.hash);

//     // Retrieve the minted token IDs from the event logs
//     const eventTopic = ethers.utils.id("NFTsMinted(address,uint256[])");
//     const eventLog = receipt.logs.find((log) =>
//       log.topics.includes(eventTopic)
//     );
//     const eventData = nftContract.interface.parseLog(eventLog);

//     const mintedTokenIDs = eventData.args[1]; // Array of minted token IDs

//     const token0Type = await nftContract.getTokenType(mintedTokenIDs[0]);
//     const token1Type = await nftContract.getTokenType(mintedTokenIDs[1]);

//     expect(token0Type).to.equal(0);
//     expect(token1Type).to.equal(1);
//   });
//   it("Should mint NFTs with type 0, 1, and 2", async function () {
//     const totalCost = type0Price.add(type1Price).add(type2Price);
//     const tx = await nftContract.publicMint([0, 1, 2], [], {
//       value: totalCost,
//     });
//     await tx.wait();

//     // Get the transaction receipt
//     const receipt = await ethers.provider.getTransactionReceipt(tx.hash);

//     // Retrieve the minted token IDs from the event logs
//     const eventTopic = ethers.utils.id("NFTsMinted(address,uint256[])");
//     const eventLog = receipt.logs.find((log) =>
//       log.topics.includes(eventTopic)
//     );
//     const eventData = nftContract.interface.parseLog(eventLog);

//     const mintedTokenIDs = eventData.args[1]; // Array of minted token IDs

//     const token0Type = await nftContract.getTokenType(mintedTokenIDs[0]);
//     const token1Type = await nftContract.getTokenType(mintedTokenIDs[1]);
//     const token2Type = await nftContract.getTokenType(mintedTokenIDs[2]);

//     expect(token0Type).to.equal(0);
//     expect(token1Type).to.equal(1);
//     expect(token2Type).to.equal(2);
//   });
//   it("Should mint NFTs with type 1, 1, and 1", async function () {
//     const totalCost = type1Price.add(type1Price).add(type1Price);
//     const tx = await nftContract.publicMint([1, 1, 1], [], {
//       value: totalCost,
//     });
//     await tx.wait();

//     // Get the transaction receipt
//     const receipt = await ethers.provider.getTransactionReceipt(tx.hash);

//     // Retrieve the minted token IDs from the event logs
//     const eventTopic = ethers.utils.id("NFTsMinted(address,uint256[])");
//     const eventLog = receipt.logs.find((log) =>
//       log.topics.includes(eventTopic)
//     );
//     const eventData = nftContract.interface.parseLog(eventLog);

//     const mintedTokenIDs = eventData.args[1]; // Array of minted token IDs

//     const token0Type = await nftContract.getTokenType(mintedTokenIDs[0]);
//     const token1Type = await nftContract.getTokenType(mintedTokenIDs[1]);
//     const token2Type = await nftContract.getTokenType(mintedTokenIDs[2]);

//     expect(token0Type).to.equal(1);
//     expect(token1Type).to.equal(1);
//     expect(token2Type).to.equal(1);
//   });
//   it("Should revert if input a non-valid type", async function () {
//     let revert = false;
//     try {
//       const tx = await nftContract.publicMint([3], [], {
//         value: totalCost,
//       });
//     } catch (error) {
//       revert = true;
//     }
//     expect(revert).to.equal(true);
//   });
//   it("Should revert if input more than 3 NFTs", async function () {
//     let revert = false;
//     try {
//       const tx = await nftContract.publicMint([1, 2, 1, 1], [], {
//         value: type1Price.mul(3).add(type2Price),
//       });
//     } catch (error) {
//       revert = true;
//     }
//     expect(revert).to.equal(true);
//   });
//   it("Should revert if insufficient funds are sent", async function () {
//     let revert = false;
//     try {
//       const tx = await nftContract.publicMint([1, 2], [], {
//         value: type0Price.add(type2Price).minus(1),
//       });
//     } catch (error) {
//       revert = true;
//     }
//     expect(revert).to.equal(true);
//   });
//   it("Should revert if minting more than 300 NFTs of type 0", async function () {
//     let revert1 = false;
//     let revert2 = false;
//     try {
//       for (let i = 0; i < 300; i++) {
//         const tx = await nftContract.publicMint([0], [], {
//           value: type0Price,
//         });
//       }
//     } catch (error) {
//       revert1 = true;
//     }
//     try {
//       const tx = await nftContract.publicMint([0], {
//         value: type0Price,
//       });
//     } catch (error) {
//       revert2 = true;
//     }

//     expect(revert1).to.equal(false);
//     expect(revert2).to.equal(true);
//   });
//   it("Should revert if minting more than 300 NFTs of type 1", async function () {
//     let revert1 = false;
//     let revert2 = false;
//     try {
//       for (let i = 0; i < 300; i++) {
//         const tx = await nftContract.publicMint([1], [], {
//           value: type1Price,
//         });
//       }
//     } catch (error) {
//       revert1 = true;
//     }
//     try {
//       const tx = await nftContract.publicMint([1], {
//         value: type1Price,
//       });
//     } catch (error) {
//       revert2 = true;
//     }

//     expect(revert1).to.equal(false);
//     expect(revert2).to.equal(true);
//   });
//   it("Should revert if minting more than 400 NFTs of type 2", async function () {
//     let revert1 = false;
//     let revert2 = false;
//     try {
//       for (let i = 0; i < 400; i++) {
//         const tx = await nftContract.publicMint([2], [], {
//           value: type2Price,
//         });
//       }
//     } catch (error) {
//       revert1 = true;
//     }
//     try {
//       const tx = await nftContract.publicMint([2], {
//         value: type2Price,
//       });
//     } catch (error) {
//       revert2 = true;
//     }

//     expect(revert1).to.equal(false);
//     expect(revert2).to.equal(true);
//   });
//   it("Should mint 300 different NFTs of type 0", async function () {
//     const nftIDs = [];
//     for (let i = 0; i < 300; i++) {
//       let tx = await nftContract.publicMint([0], [], {
//         value: type0Price,
//       });
//       await tx.wait();

//       // Get the transaction receipt
//       let receipt = await ethers.provider.getTransactionReceipt(tx.hash);

//       // Retrieve the minted token IDs from the event logs
//       let eventTopic = ethers.utils.id("NFTsMinted(address,uint256[])");
//       let eventLog = receipt.logs.find((log) =>
//         log.topics.includes(eventTopic)
//       );
//       let eventData = nftContract.interface.parseLog(eventLog);

//       let mintedTokenIDs = eventData.args[1]; // Array of minted token IDs

//       let tokenId = mintedTokenIDs[0];
//       nftIDs.push(tokenId);
//     }
//     const set = new Set(nftIDs);

//     expect(set.size).to.equal(300);
//   });
//   it("Should mint 300 different NFTs of type 1", async function () {
//     const nftIDs = [];
//     for (let i = 0; i < 300; i++) {
//       let tx = await nftContract.publicMint([1], [], {
//         value: type1Price,
//       });
//       await tx.wait();

//       // Get the transaction receipt
//       let receipt = await ethers.provider.getTransactionReceipt(tx.hash);

//       // Retrieve the minted token IDs from the event logs
//       let eventTopic = ethers.utils.id("NFTsMinted(address,uint256[])");
//       let eventLog = receipt.logs.find((log) =>
//         log.topics.includes(eventTopic)
//       );
//       let eventData = nftContract.interface.parseLog(eventLog);

//       let mintedTokenIDs = eventData.args[1]; // Array of minted token IDs

//       let tokenId = mintedTokenIDs[0];
//       nftIDs.push(tokenId);
//     }
//     const set = new Set(nftIDs);

//     expect(set.size).to.equal(300);
//   });
//   it("Should mint 400 different NFTs of type 2", async function () {
//     const nftIDs = [];
//     for (let i = 0; i < 400; i++) {
//       let tx = await nftContract.publicMint([2], [], {
//         value: type2Price,
//       });
//       await tx.wait();

//       // Get the transaction receipt
//       let receipt = await ethers.provider.getTransactionReceipt(tx.hash);

//       // Retrieve the minted token IDs from the event logs
//       let eventTopic = ethers.utils.id("NFTsMinted(address,uint256[])");
//       let eventLog = receipt.logs.find((log) =>
//         log.topics.includes(eventTopic)
//       );
//       let eventData = nftContract.interface.parseLog(eventLog);

//       let mintedTokenIDs = eventData.args[1]; // Array of minted token IDs

//       let tokenId = mintedTokenIDs[0];
//       nftIDs.push(tokenId);
//     }
//     const set = new Set(nftIDs);
//     expect(set.size).to.equal(400);
//   });
// });
// describe("nftContract(minting with discount)", function () {
//   let nftContract;
//   let owner;
//   let addr1;
//   let addr2;
//   let addr3;

//   beforeEach(async function () {
//     // Deploy the NFT contract before each test
//     const NFTContract = await ethers.getContractFactory("NFTContract");
//     [owner, addr1, addr2, addr3] = await ethers.getSigners();

//     nftContract = await NFTContract.deploy();
//     await nftContract.deployed();
//     const root =
//       "0x66361847ad5a161f38dd1a255fc1526c3aefe88e276772ad5b7138a040f52a34";
//     await nftContract.connect(owner).setRoot(root);
//   });
//   it("should mint an NFT with a discount", async () => {
//     const cost = type0Price.mul(90).div(100);
//     const proof = [
//       "0xa118f5899d6ff9a7a013ad184f916e55c7d58128c447198935a8b404ea5e814c",
//       "0x5920fc902e6850f43764c036081c5e6e22d1a526643373ba9ec781714d302a8c",
//     ];

//     await expect(
//       nftContract.publicMint([0], proof, {
//         value: cost,
//       })
//     ).to.emit(nftContract, "Transfer");
//   });

//   it("should mint multiple NFTs with only one having a discount", async () => {
//     const cost = type0Price.mul(90).div(100).add(type2Price).add(type1Price);
//     const proof = [
//       "0xa118f5899d6ff9a7a013ad184f916e55c7d58128c447198935a8b404ea5e814c",
//       "0x5920fc902e6850f43764c036081c5e6e22d1a526643373ba9ec781714d302a8c",
//     ];

//     await expect(
//       nftContract.publicMint([0, 1, 2], proof, {
//         value: cost,
//       })
//     ).to.emit(nftContract, "Transfer");
//   });

//   it("should revert when minting with an invalid discount", async () => {
//     const cost = type0Price.mul(80).div(100);
//     const proof = [
//       "0xa118f5899d6ff9a7a013ad184f916e55c7d58128c447198935a8b404ea5e814c",
//       "0x5920fc902e6850f43764c036081c5e6e22d1a526643373ba9ec781714d302a8c",
//     ];

//     await expect(
//       nftContract.publicMint([0], proof, {
//         value: cost,
//       })
//     ).to.be.revertedWith("Invalid proof");
//   });

//   it("should revert when minting with the same address twice", async () => {
//     const cost = type0Price.mul(90).div(100);
//     const proof = [
//       "0xa118f5899d6ff9a7a013ad184f916e55c7d58128c447198935a8b404ea5e814c",
//       "0x5920fc902e6850f43764c036081c5e6e22d1a526643373ba9ec781714d302a8c",
//     ];

//     await nftContract.publicMint([0], proof, {
//       value: cost,
//     });

//     await expect(
//       nftContract.publicMint([0], proof, {
//         value: cost,
//       })
//     ).to.be.revertedWith("You have already minted an NFT.");
//   });
// });

describe("nftContract early mint", function () {
  let nftContract;
  let owner;
  let addr1;
  let addr2;
  let addr3;

  beforeEach(async function () {
    const NFTContract = await ethers.getContractFactory("NFTContract");
    [owner, addr1, addr2, addr3] = await ethers.getSigners();

    nftContract = await NFTContract.deploy();
    await nftContract.deployed();

    await nftContract
      .connect(owner)
      .setWitnesses([
        "0x44A489a6E08E5895cbBb585c45634AA2E421e09F",
        "0x0b7b4ae52c79b2C42ce7B40BeD26994E52414cCe",
        "0x929707496aF2600A733ce22c2A607256DaaD0A3B",
      ]);
  });
  it("should revert if publicMint is called before the launch", async () => {
    const cost = type0Price.add(type1Price).add(type2Price);

    const index = 0;
    await expect(
      nftContract.publicMint([0, 1, 2], [], {
        value: cost,
      })
    ).to.be.revertedWith("Contract is not launched");
  });
  it("should mint an NFT with earlyMint before the launch", async () => {
    const cost = type0Price.add(type1Price).add(type2Price);
    const signatures = [
      "0x0f596340e58fa08c9769df2757124e18a2b937917ca3830e5a51dc35258794262069412d6411846acb38cc02495f0457c8e54997fb6d2215d045758521970de71c",
      "0xc73372549991b2f10a51b55b27b82c553824f1501acf48591ee5dfc162a634a579010a3a9da4ef0b640ef7bc8da3f9342cfb004861ffbd13434b5ac24fe156301c",
      "0xeca2244bd8d7202ad752d9e996bb49d4088045a2d91d150d03260416cd5d77f6385452f46de44297fba2d54b9d12509eedb6f0bc2bdf3cdda7f22b95af1663da1c",
    ];

    const index = 0;
    await expect(
      nftContract.earlyMint([0, 1, 2], index, signatures, {
        value: cost,
      })
    ).to.emit(nftContract, "Transfer");
  });
  it("should revert if the signatures are insufficient(>3/2)", async () => {
    const cost = type0Price.add(type1Price).add(type2Price);
    const signatures = [
      "0x0f596340e58fa08c9769df2757124e18a2b937917ca3830e5a51dc35258794262069412d6411846acb38cc02495f0457c8e54997fb6d2215d045758521970de71c",
      "0xc73372549991b2f10a51b55b27b82c553824f1501acf48591ee5dfc162a634a579010a3a9da4ef0b640ef7bc8da3f9342cfb004861ffbd13434b5ac24fe156301c",
    ];

    const index = 0;
    await expect(
      nftContract.earlyMint([0, 1, 2], index, signatures, {
        value: cost,
      })
    ).to.be.revertedWith("insufficient witnesses");
  });
  it("should revert if we put dublicate signature", async () => {
    const cost = type0Price.add(type1Price).add(type2Price);
    const signatures = [
      "0x0f596340e58fa08c9769df2757124e18a2b937917ca3830e5a51dc35258794262069412d6411846acb38cc02495f0457c8e54997fb6d2215d045758521970de71c",
      "0xc73372549991b2f10a51b55b27b82c553824f1501acf48591ee5dfc162a634a579010a3a9da4ef0b640ef7bc8da3f9342cfb004861ffbd13434b5ac24fe156301c",
      "0xc73372549991b2f10a51b55b27b82c553824f1501acf48591ee5dfc162a634a579010a3a9da4ef0b640ef7bc8da3f9342cfb004861ffbd13434b5ac24fe156301c",
    ];

    const index = 0;
    await expect(
      nftContract.earlyMint([0, 1, 2], index, signatures, {
        value: cost,
      })
    ).to.be.revertedWith("duplicate witness");
  });
  it("should revert if incorrect funds are sent", async () => {
    const cost = type0Price.add(type1Price).add(type2Price).add(-1);
    const signatures = [
      "0x0f596340e58fa08c9769df2757124e18a2b937917ca3830e5a51dc35258794262069412d6411846acb38cc02495f0457c8e54997fb6d2215d045758521970de71c",
      "0xc73372549991b2f10a51b55b27b82c553824f1501acf48591ee5dfc162a634a579010a3a9da4ef0b640ef7bc8da3f9342cfb004861ffbd13434b5ac24fe156301c",
      "0xeca2244bd8d7202ad752d9e996bb49d4088045a2d91d150d03260416cd5d77f6385452f46de44297fba2d54b9d12509eedb6f0bc2bdf3cdda7f22b95af1663da1c",
    ];

    const index = 0;
    await expect(
      nftContract.earlyMint([0, 1, 2], index, signatures, {
        value: cost,
      })
    ).to.be.revertedWith("Insufficient funds sent");
  });
  it("should revert if the same signature is used twice", async () => {
    const cost = type0Price.add(type1Price).add(type2Price);
    const signatures = [
      "0x0f596340e58fa08c9769df2757124e18a2b937917ca3830e5a51dc35258794262069412d6411846acb38cc02495f0457c8e54997fb6d2215d045758521970de71c",
      "0xc73372549991b2f10a51b55b27b82c553824f1501acf48591ee5dfc162a634a579010a3a9da4ef0b640ef7bc8da3f9342cfb004861ffbd13434b5ac24fe156301c",
      "0xeca2244bd8d7202ad752d9e996bb49d4088045a2d91d150d03260416cd5d77f6385452f46de44297fba2d54b9d12509eedb6f0bc2bdf3cdda7f22b95af1663da1c",
    ];

    const index = 0;

    await expect(
      nftContract.earlyMint([0, 1, 2], index, signatures, {
        value: cost,
      })
    ).to.emit(nftContract, "Transfer");

    await expect(
      nftContract.earlyMint([0, 1, 2], index, signatures, {
        value: cost,
      })
    ).to.be.revertedWith("signatures has been used");
  });
});
