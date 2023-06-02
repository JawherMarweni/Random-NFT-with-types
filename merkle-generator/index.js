const { MerkleTree } = require("merkletreejs");
const { keccak256 } = require("js-sha3");
const fs = require("fs");

function createMerkleTree(leaves) {
  const leavesBuffer = leaves.map((leaf) => Buffer.from(leaf.slice(2), "hex"));
  return new MerkleTree(leavesBuffer, keccak256, { sortPairs: true });
}

function createLeaf(receiver, discount) {
  const web3 = require("web3");
  return web3.utils.soliditySha3(
    { type: "address", value: receiver },
    { type: "uint256", value: discount }
  );
}

function getLeaves(fileDirectory) {
  const data = fs.readFileSync(fileDirectory, "utf8");
  try {
    const discounts = JSON.parse(data);
    return discounts.map((discount) => {
      const { receiver, discount: disc } = discount;
      return {
        receiver,
        leaf: createLeaf(receiver, disc),
      };
    });
  } catch (error) {
    console.error("Error parsing discounts.json:", error);
    return [];
  }
}

function createProofFile(tree, leaves) {
  const proofs = leaves.map(({ receiver, leaf }) => {
    const proof = tree
      .getProof(leaf)
      .map((proofElement) => "0x" + proofElement.data.toString("hex"));

    return {
      address: receiver,
      proof: proof,
    };
  });

  const proofFileData = JSON.stringify(proofs, null, 2);
  fs.writeFileSync("proofs.json", proofFileData);
}

const discountsFile = "discounts.json";
const leaves = getLeaves(discountsFile);
console.log(leaves);

const tree = createMerkleTree(leaves.map(({ leaf }) => leaf));
const root = "0x" + tree.getRoot().toString("hex");
console.log(root);
createProofFile(tree, leaves);

// 0x569ab48c70cc15322c9253243aab005d1c64df7c33031cf8dfb5a8ac071d368d
