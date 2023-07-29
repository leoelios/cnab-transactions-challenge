import { Merchant } from "./merchant";
import { Transaction } from "./transaction";

export interface MerchantDetails {
  merchant: Merchant;
  balance: number;
  transactions: Array<Transaction>;
}
