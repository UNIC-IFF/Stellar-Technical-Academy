import { FeeBumpTransaction, Keypair, Transaction } from "stellar-base";
import { ServerApi } from "./server_api";
export declare namespace Utils {
    function buildChallengeTx(serverKeypair: Keypair, clientAccountID: string, homeDomain: string, timeout: number | undefined, networkPassphrase: string, webAuthDomain: string, memo?: string | null, clientDomain?: string | null, clientSigningKey?: string | null): string;
    function readChallengeTx(challengeTx: string, serverAccountID: string, networkPassphrase: string, homeDomains: string | string[], webAuthDomain: string): {
        tx: Transaction;
        clientAccountID: string;
        matchedHomeDomain: string;
        memo: string | null;
    };
    function verifyChallengeTxThreshold(challengeTx: string, serverAccountID: string, networkPassphrase: string, threshold: number, signerSummary: ServerApi.AccountRecordSigners[], homeDomains: string | string[], webAuthDomain: string): string[];
    function verifyChallengeTxSigners(challengeTx: string, serverAccountID: string, networkPassphrase: string, signers: string[], homeDomains: string | string[], webAuthDomain: string): string[];
    function verifyTxSignedBy(transaction: FeeBumpTransaction | Transaction, accountID: string): boolean;
    function gatherTxSigners(transaction: FeeBumpTransaction | Transaction, signers: string[]): string[];
}
