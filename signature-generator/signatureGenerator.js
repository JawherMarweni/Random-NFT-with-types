//["0x44A489a6E08E5895cbBb585c45634AA2E421e09F","0x0b7b4ae52c79b2C42ce7B40BeD26994E52414cCe","0x929707496aF2600A733ce22c2A607256DaaD0A3B"]

const ethers = require("ethers");
const web3 = require("web3");

function getAddressFromPrivateKey(privateKey) {
  const wallet = new ethers.Wallet(privateKey);
  return wallet.address;
}
function recoverAddressFromSignature(message, signature) {
  const hash = ethers.utils.keccak256(message);
  const { r, s, v } = ethers.utils.splitSignature(signature);

  const recoveredAddress = ethers.utils.recoverAddress(hash, { r, s, v });
  return recoveredAddress;
}

const provider = ethers.getDefaultProvider();
const privateKeys = [
  "d22126f904469a72ac206fbe43946078397705b68128e81665634f83341748c0", //0x44A489a6E08E5895cbBb585c45634AA2E421e09F
  "0c2fc3e42675d1b9720a8a88a63dfcb88e3ff1f01012e20a1802d13327afb52a", //0x0b7b4ae52c79b2C42ce7B40BeD26994E52414cCe
  "379b6004c476f2336245b038a78e43c8919cd2d95bc79854a90a50b6993671ed", //0x929707496aF2600A733ce22c2A607256DaaD0A3B
];

const types = [0, 1, 1];
const index = 0;
const receiver = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

const key = web3.utils.soliditySha3(
  { type: "uint256[]", value: types },
  { type: "uint256", value: index },
  { type: "address", value: receiver }
);
console.log(key);
async function signMessage(key) {
  let signatures = [];

  for (let i = 0; i < privateKeys.length; i++) {
    console.log("address", i, " : ", getAddressFromPrivateKey(privateKeys[i]));
    const wallet = new ethers.Wallet(privateKeys[i], provider);
    const signature = await wallet.signMessage(ethers.utils.arrayify(key));
    console.log(
      "address signature",
      i,
      " : ",
      recoverAddressFromSignature(ethers.utils.arrayify(key), signature)
    );
    signatures.push(signature);
  }

  return signatures;
}

async function generateSignatures() {
  try {
    let signatures = await signMessage(key);

    console.log("Signatures:", signatures);
  } catch (error) {
    console.error("Error generating signatures:", error);
  }
}

generateSignatures();

//"0x343c3907341d89fd941f33145d8af296ac3a4ab15f91fab096b59bad9265f9546190258b8d0384d0d5605ffb8507b57d82921473b2dd1b4adb10f5d39c393bbd1b0x4a43f24bcb2976a68df09fb050cfb5fed0349f4bb235bbd32a093e5a503d0b95309dc608e332034d9856106f7551bba3f8ec651f14ba7958abbc29bf6c34b4001c0x27fd1a6d30df789146379a8af780ce68724553ed7e5d0ea5ec1390f73738b1bb1a9ac55cb6a1ad28a34f90d9255a94a619a5b4355a2877749cd68621999ccd521c"
