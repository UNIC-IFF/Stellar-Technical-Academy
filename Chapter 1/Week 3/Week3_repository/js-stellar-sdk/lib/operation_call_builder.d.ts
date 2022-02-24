/// <reference types="urijs" />
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class OperationCallBuilder extends CallBuilder<ServerApi.CollectionPage<ServerApi.OperationRecord>> {
    constructor(serverUrl: URI);
    operation(operationId: string): CallBuilder<ServerApi.OperationRecord>;
    forAccount(accountId: string): this;
    forClaimableBalance(claimableBalanceId: string): this;
    forLedger(sequence: number | string): this;
    forTransaction(transactionId: string): this;
    forLiquidityPool(poolId: string): this;
    includeFailed(value: boolean): this;
}
