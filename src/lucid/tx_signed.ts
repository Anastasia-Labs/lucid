import { C } from "../core/mod.ts";
import { CML } from "../core/mod.ts"
import { Transaction, TxHash } from "../types/mod.ts";
import { Lucid } from "./lucid.ts";
import { toHex } from "../utils/mod.ts";

export class TxSigned {
  txSigned: CML.Transaction;
  private lucid: Lucid;
  constructor(lucid: Lucid, tx: CML.Transaction) {
    this.lucid = lucid;
    this.txSigned = tx;
  }

  async submit(): Promise<TxHash> {
    return await (this.lucid.wallet || this.lucid.provider).submitTx(
      this.txSigned.to_cbor_hex(),
    );
  }

  /** Returns the transaction in Hex encoded Cbor. */
  toString(): Transaction {
    return this.txSigned.to_cbor_hex();
  }

  /** Return the transaction hash. */
  toHash(): TxHash {
    return CML.TransactionHash.from_raw_bytes(this.txSigned.body().to_cbor_bytes()).to_hex();
  }
}
