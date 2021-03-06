"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(amount, payer, // public key
    receiver // public key
    ) {
        this.amount = amount;
        this.payer = payer;
        this.receiver = receiver;
    }
    toString() {
        return JSON.stringify(this);
    }
}
exports.Transaction = Transaction;
