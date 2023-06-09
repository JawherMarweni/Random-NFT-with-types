const ethers = require("ethers");

const privateKeys = [
  "d22126f904469a72ac206fbe43946078397705b68128e81665634f83341748c0", //0x44A489a6E08E5895cbBb585c45634AA2E421e09F
  "0c2fc3e42675d1b9720a8a88a63dfcb88e3ff1f01012e20a1802d13327afb52a", //0x0b7b4ae52c79b2C42ce7B40BeD26994E52414cCe
  "379b6004c476f2336245b038a78e43c8919cd2d95bc79854a90a50b6993671ed", //0x929707496aF2600A733ce22c2A607256DaaD0A3B
];

const types = [0, 1, 2];
const index = 0;
const receiver = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

async function recoverSigner(hash, signature) {
  const messageHash = ethers.utils.arrayify(hash);
  const recoveredAddress = ethers.utils.verifyMessage(messageHash, signature);
  return recoveredAddress;
}

async function signMessage() {
  const provider = ethers.getDefaultProvider();
  const signatures = [];

  for (let i = 0; i < privateKeys.length; i++) {
    const privateKey = privateKeys[i];
    const wallet = new ethers.Wallet(privateKey, provider);
    const hash = ethers.utils.solidityKeccak256(
      ["uint256[]", "uint256", "address"],
      [types, index, receiver]
    );
    const signature = await wallet.signMessage(ethers.utils.arrayify(hash));
    const recoveredAddress = await recoverSigner(hash, signature);

    console.log(`Signature ${i + 1}: ${signature}`);
    console.log(`Recovered Address ${i + 1}: ${recoveredAddress}`);

    signatures.push(signature);
  }

  return signatures;
}

signMessage();
