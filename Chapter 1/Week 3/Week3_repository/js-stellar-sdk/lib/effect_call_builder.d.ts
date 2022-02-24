/// <reference types="urijs" />
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class EffectCallBuilder extends CallBuilder<ServerApi.CollectionPage<ServerApi.EffectRecord>> {
    constructor(serverUrl: URI);
    forAccount(accountId: string): this;
    forLedger(sequence: number | string): this;
    forTransaction(transactionId: string): this;
    forOperation(operationId: string): this;
    forLiquidityPool(poolId: string): this;
}
