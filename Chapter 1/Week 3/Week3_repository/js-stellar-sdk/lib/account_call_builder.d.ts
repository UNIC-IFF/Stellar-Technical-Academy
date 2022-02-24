/// <reference types="urijs" />
import { Asset } from "stellar-base";
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class AccountCallBuilder extends CallBuilder<ServerApi.CollectionPage<ServerApi.AccountRecord>> {
    constructor(serverUrl: URI);
    accountId(id: string): CallBuilder<ServerApi.AccountRecord>;
    forSigner(id: string): this;
    forAsset(asset: Asset): this;
    sponsor(id: string): this;
    forLiquidityPool(id: string): this;
}
