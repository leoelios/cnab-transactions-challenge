import { Merchant } from "./merchant";

export interface Transaction {
  /**
   *  Code of transaction.
   *
   * @see https://github.com/ByCodersTec/desafio-dev#documenta%C3%A7%C3%A3o-sobre-os-tipos-das-transa%C3%A7%C3%B5es
   */
  typeCode: int;

  merchant: Merchant;

  customer: {
    cpf: string;
    cardNumber: string;
  };

  amount: number;

  timestamp: Date;
}
