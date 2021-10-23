import { Chain } from "./models/chain";
import { Wallet } from "./models/wallet";

const edwinsWallet = new Wallet();
const bobsWallet = new Wallet();
const alicesWallet = new Wallet();

edwinsWallet.sendMoney(50, bobsWallet.publicKey);
bobsWallet.sendMoney(23, alicesWallet.publicKey);
alicesWallet.sendMoney(5, bobsWallet.publicKey);

console.log(Chain.instance);
