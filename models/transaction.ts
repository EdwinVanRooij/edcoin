export class Transaction {
  constructor(
    public amount: number,
    public payer: string, // public key
    public receiver: string // public key
  ) {}

  toString() {
    return JSON.stringify(this);
  }
}
