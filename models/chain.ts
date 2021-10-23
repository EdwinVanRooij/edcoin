import * as crypto from "crypto";
import { Block } from "./block";
import { Transaction } from "./transaction";

export class Chain {
  public static instance = new Chain();

  chain: Block[];

  constructor() {
    this.chain = [
      new Block("nothing", new Transaction(100, "genesis", "Edwin")),
    ];
  }

  get lastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(
    transaction: Transaction,
    senderPublicKey: string,
    signature: Buffer
  ) {
    const verifier = crypto.createVerify("SHA256");
    verifier.update(transaction.toString());

    const isValid = verifier.verify(senderPublicKey, signature);
    if (!isValid) {
      console.error(
        `Fraud detected: tried to add a block with an invalid signature.`
      );
    }

    const newBlock = new Block(this.lastBlock.hash, transaction);
    this.mine(newBlock.nonce);
    this.chain.push(newBlock);
  }

  mine(nonce: number) {
    let solution = 0;
    console.log("Mining... ⛏️");

    while (true) {
      solution++;
      const hash = crypto.createHash("MD5");
      hash.update((nonce + solution).toString()).end();

      const attempt = hash.digest("hex");

      if (attempt.substr(0, 4) === "0000") {
        console.log(`Solved the chalenge: ${solution}`);
        return solution;
      }
    }
  }
}
