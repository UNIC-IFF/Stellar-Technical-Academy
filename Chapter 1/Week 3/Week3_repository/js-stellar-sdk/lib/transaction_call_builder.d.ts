/// <reference types="urijs" />
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class TransactionCallBuilder extends CallBuilder<ServerApi.CollectionPage<ServerApi.TransactionRecord>> {
    constructor(serverUrl: URI);
    transaction(transactionId: string): CallBuilder<ServerApi.TransactionRecord>;
    forAccount(accountId: string): this;
    forClaimableBalance(claimableBalanceId: string): this;
    forLedger(sequence: number | string): this;
    forLiquidityPool(poolId: string): this;
    includeFailed(value: boolean): this;
}
