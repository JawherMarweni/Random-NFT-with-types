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
//     const tx = await nftContract.publicMint([0], [], 0, {
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
//     console.log("Token type : ", tokenType);
//     expect(tokenType).to.equal(0);
//   });
//   it("Should mint NFT with type 1", async function () {
//     const tx = await nftContract.publicMint([1], [], 0, {
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
//     console.log("Token type : ", tokenType);
//     expect(tokenType).to.equal(1);
//   });
//   it("Should mint NFT with type 2", async function () {
//     const tx = await nftContract.publicMint([2], [], 0, {
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
//     console.log("Token type : ", tokenType);
//     expect(tokenType).to.equal(2);
//   });
//   it("Should mint NFTs with type 0 and 1", async function () {
//     const totalCost = type0Price.add(type1Price);
//     const tx = await nftContract.publicMint([0, 1], [], 0, {
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

//     console.log("Token 0 type : ", token0Type);
//     console.log("Token 1 type : ", token1Type);
//     expect(token0Type).to.equal(0);
//     expect(token1Type).to.equal(1);
//   });
//   it("Should mint NFTs with type 0, 1, and 2", async function () {
//     const totalCost = type0Price.add(type1Price).add(type2Price);
//     const tx = await nftContract.publicMint([0, 1, 2], [], 0, {
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

//     console.log("Token 0 type : ", token0Type);
//     console.log("Token 1 type : ", token1Type);
//     console.log("Token 2 type : ", token2Type);
//     expect(token0Type).to.equal(0);
//     expect(token1Type).to.equal(1);
//     expect(token2Type).to.equal(2);
//   });
//   it("Should mint NFTs with type 1, 1, and 1", async function () {
//     const totalCost = type1Price.add(type1Price).add(type1Price);
//     const tx = await nftContract.publicMint([1, 1, 1], [], 0, {
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

//     console.log("Token 0 type : ", token0Type);
//     console.log("Token 1 type : ", token1Type);
//     console.log("Token 2 type : ", token2Type);
//     expect(token0Type).to.equal(1);
//     expect(token1Type).to.equal(1);
//     expect(token2Type).to.equal(1);
//   });
//   it("Should revert if input a non-valid type", async function () {
//     let revert = false;
//     try {
//       const tx = await nftContract.publicMint([3], [], 0, {
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
//       const tx = await nftContract.publicMint([1, 2, 1, 1], [], 0, {
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
//       const tx = await nftContract.publicMint([1, 2], [], 0, {
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
//         const tx = await nftContract.publicMint([0], [], 0, {
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
//     console.log("Reverting after minting exactly 300 NFTs of type 0:", revert1);
//     console.log("Reverting after minting one NFT after 300 minted:", revert2);

//     expect(revert1).to.equal(false);
//     expect(revert2).to.equal(true);
//   });
//   it("Should revert if minting more than 300 NFTs of type 1", async function () {
//     let revert1 = false;
//     let revert2 = false;
//     try {
//       for (let i = 0; i < 300; i++) {
//         const tx = await nftContract.publicMint([1], [], 0, {
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
//     console.log("Reverting after minting exactly 300 NFTs of type 1:", revert1);
//     console.log("Reverting after minting one NFT after 300 minted:", revert2);

//     expect(revert1).to.equal(false);
//     expect(revert2).to.equal(true);
//   });
//   it("Should revert if minting more than 400 NFTs of type 2", async function () {
//     let revert1 = false;
//     let revert2 = false;
//     try {
//       for (let i = 0; i < 400; i++) {
//         const tx = await nftContract.publicMint([2], [], 0, {
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
//     console.log("Reverting after minting exactly 400 NFTs of type 2:", revert1);
//     console.log("Reverting after minting one NFT after 400 minted:", revert2);

//     expect(revert1).to.equal(false);
//     expect(revert2).to.equal(true);
//   });
//   it("Should mint 300 different NFTs of type 0", async function () {
//     const nftIDs = [];
//     for (let i = 0; i < 300; i++) {
//       let tx = await nftContract.publicMint([0], [], 0, {
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
//     console.log("Number of different NFTs minted (type 0):", set.size);
//     expect(set.size).to.equal(300);
//   });
//   it("Should mint 300 different NFTs of type 1", async function () {
//     const nftIDs = [];
//     for (let i = 0; i < 300; i++) {
//       let tx = await nftContract.publicMint([1], [], 0, {
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
//     console.log("Number of different NFTs minted (type 1):", set.size);
//     expect(set.size).to.equal(300);
//   });
//   it("Should mint 400 different NFTs of type 2", async function () {
//     const nftIDs = [];
//     for (let i = 0; i < 400; i++) {
//       let tx = await nftContract.publicMint([2], [], 0, {
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
//     console.log("Number of different NFTs minted (type 2):", set.size);
//     expect(set.size).to.equal(400);
//   });
// });
describe("nftContract(minting with discount)", function () {
  let nftContract;
  let owner;
  let addr1;
  let addr2;
  let addr3;

  beforeEach(async function () {
    // Deploy the NFT contract before each test
    const NFTContract = await ethers.getContractFactory("NFTContract");
    [owner, addr1, addr2, addr3] = await ethers.getSigners();

    nftContract = await NFTContract.deploy();
    await nftContract.deployed();
    const root =
      "0x765e5fef76cd3cba3c03385c360ddf974060e0a9d4927dcb81d78cd3835674fb";
    await nftContract.connect(owner).setRoot(root);
  });

  it("Should mint NFT with type 0 with discount of 10% for address1", async function () {
    const cost = type0Price.mul(90).div(100);
    proof = [
      "0xf5e703de574d5e61fabf42757b648bf2f0b2650439e9640adf10b96e16b7051f",
      "0x2bd6d62e5169276219ba4940e8547352f29598748320f2dd67c14efba3b0f3fb",
    ];
    const tx = await nftContract.publicMint([0], proof, 10, {
      value: cost,
    });
    await tx.wait();

    // Get the transaction receipt
    const receipt = await ethers.provider.getTransactionReceipt(tx.hash);

    // Retrieve the minted token IDs from the event logs
    const eventTopic = ethers.utils.id("NFTsMinted(address,uint256[])");
    const eventLog = receipt.logs.find((log) =>
      log.topics.includes(eventTopic)
    );
    const eventData = nftContract.interface.parseLog(eventLog);

    const mintedTokenIDs = eventData.args[1]; // Array of minted token IDs

    const tokenId = mintedTokenIDs[0];

    const tokenType = await nftContract.getTokenType(tokenId);
    console.log("Token type : ", tokenType);
    expect(tokenType).to.equal(0);
    expect(0).to.equal(0);
  });
  it("Should revert if insufficient funds are sent after discount", async function () {
    let revert = false;
    try {
      const cost = type0Price.mul(90).div(100).minus(1);
      proof = [
        "0xf5e703de574d5e61fabf42757b648bf2f0b2650439e9640adf10b96e16b7051f",
        "0x2bd6d62e5169276219ba4940e8547352f29598748320f2dd67c14efba3b0f3fb",
      ];
      const tx = await nftContract.publicMint([0], proof, 10, {
        value: cost,
      });
    } catch (e) {
      revert = true;
    }
    expect(revert).to.equal(true);
  });
  it("Should revert if wrong discount is inputet", async function () {
    let revert = false;
    try {
      const cost = type0Price.mul(80).div(100);
      proof = [
        "0xf5e703de574d5e61fabf42757b648bf2f0b2650439e9640adf10b96e16b7051f",
        "0x2bd6d62e5169276219ba4940e8547352f29598748320f2dd67c14efba3b0f3fb",
      ];
      const tx = await nftContract.publicMint([0], proof, 20, {
        value: cost,
      });
    } catch (e) {
      revert = true;
    }
    expect(revert).to.equal(true);
  });
  it("Should revert if wrong type is inputet", async function () {
    let revert = false;
    try {
      const cost = type1Price.mul(90).div(100);
      proof = [
        "0xf5e703de574d5e61fabf42757b648bf2f0b2650439e9640adf10b96e16b7051f",
        "0x2bd6d62e5169276219ba4940e8547352f29598748320f2dd67c14efba3b0f3fb",
      ];
      const tx = await nftContract.publicMint([1], proof, 10, {
        value: cost,
      });
    } catch (e) {
      revert = true;
    }
    expect(revert).to.equal(true);
  });
  it("Should revert if wrong user call the function", async function () {
    let revert = false;
    try {
      const cost = type0Price.mul(90).div(100);
      proof = [
        "0xf5e703de574d5e61fabf42757b648bf2f0b2650439e9640adf10b96e16b7051f",
        "0x2bd6d62e5169276219ba4940e8547352f29598748320f2dd67c14efba3b0f3fb",
      ];
      const tx = await nftContract.connect(addr1).publicMint([1], proof, 10, {
        value: cost,
      });
    } catch (e) {
      revert = true;
    }
    expect(revert).to.equal(true);
  });
  // it("Should mint NFT with type 1", async function () {
  //   const tx = await nftContract.publicMint([1], [], 0, {
  //     value: type1Price,
  //   });
  //   await tx.wait();

  //   // Get the transaction receipt
  //   const receipt = await ethers.provider.getTransactionReceipt(tx.hash);

  //   // Retrieve the minted token IDs from the event logs
  //   const eventTopic = ethers.utils.id("NFTsMinted(address,uint256[])");
  //   const eventLog = receipt.logs.find((log) =>
  //     log.topics.includes(eventTopic)
  //   );
  //   const eventData = nftContract.interface.parseLog(eventLog);

  //   const mintedTokenIDs = eventData.args[1]; // Array of minted token IDs

  //   tokenId = mintedTokenIDs[0];

  //   const tokenType = await nftContract.getTokenType(tokenId);
  //   console.log("Token type : ", tokenType);
  //   expect(tokenType).to.equal(1);
  // });
  // it("Should mint NFT with type 2", async function () {
  //   const tx = await nftContract.publicMint([2], [], 0, {
  //     value: type2Price,
  //   });
  //   await tx.wait();

  //   // Get the transaction receipt
  //   const receipt = await ethers.provider.getTransactionReceipt(tx.hash);

  //   // Retrieve the minted token IDs from the event logs
  //   const eventTopic = ethers.utils.id("NFTsMinted(address,uint256[])");
  //   const eventLog = receipt.logs.find((log) =>
  //     log.topics.includes(eventTopic)
  //   );
  //   const eventData = nftContract.interface.parseLog(eventLog);

  //   const mintedTokenIDs = eventData.args[1]; // Array of minted token IDs

  //   tokenId = mintedTokenIDs[0];

  //   const tokenType = await nftContract.getTokenType(tokenId);
  //   console.log("Token type : ", tokenType);
  //   expect(tokenType).to.equal(2);
  // });
  // it("Should mint NFTs with type 0 and 1", async function () {
  //   const totalCost = type0Price.add(type1Price);
  //   const tx = await nftContract.publicMint([0, 1], [], 0, {
  //     value: totalCost,
  //   });
  //   await tx.wait();

  //   // Get the transaction receipt
  //   const receipt = await ethers.provider.getTransactionReceipt(tx.hash);

  //   // Retrieve the minted token IDs from the event logs
  //   const eventTopic = ethers.utils.id("NFTsMinted(address,uint256[])");
  //   const eventLog = receipt.logs.find((log) =>
  //     log.topics.includes(eventTopic)
  //   );
  //   const eventData = nftContract.interface.parseLog(eventLog);

  //   const mintedTokenIDs = eventData.args[1]; // Array of minted token IDs

  //   const token0Type = await nftContract.getTokenType(mintedTokenIDs[0]);
  //   const token1Type = await nftContract.getTokenType(mintedTokenIDs[1]);

  //   console.log("Token 0 type : ", token0Type);
  //   console.log("Token 1 type : ", token1Type);
  //   expect(token0Type).to.equal(0);
  //   expect(token1Type).to.equal(1);
  // });
});
