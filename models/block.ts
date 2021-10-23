import * as crypto from "crypto";

import { Transaction } from "./transaction";

export class Block {
  public nonce = Math.round(Math.random() * 999);

  constructor(
    public prevHash: string,
    public transaction: Transaction,
    public timeStamp = Date.now()
  ) {}

  get hash() {
    const string = JSON.stringify(this);
    const hash = crypto.createHash("SHA256");
    hash.update(string).end();
    return hash.digest("hex");
  }
}
