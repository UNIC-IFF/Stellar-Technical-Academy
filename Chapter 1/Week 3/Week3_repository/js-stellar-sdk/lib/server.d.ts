import { Asset, FeeBumpTransaction, Transaction } from "stellar-base";
import URI from "urijs";
import { AccountCallBuilder } from "./account_call_builder";
import { AccountResponse } from "./account_response";
import { AssetsCallBuilder } from "./assets_call_builder";
import { ClaimableBalanceCallBuilder } from "./claimable_balances_call_builder";
import { EffectCallBuilder } from "./effect_call_builder";
import { FriendbotBuilder } from "./friendbot_builder";
import { Horizon } from "./horizon_api";
import { LedgerCallBuilder } from "./ledger_call_builder";
import { LiquidityPoolCallBuilder } from "./liquidity_pool_call_builder";
import { OfferCallBuilder } from "./offer_call_builder";
import { OperationCallBuilder } from "./operation_call_builder";
import { OrderbookCallBuilder } from "./orderbook_call_builder";
import { PathCallBuilder } from "./path_call_builder";
import { PaymentCallBuilder } from "./payment_call_builder";
import { TradeAggregationCallBuilder } from "./trade_aggregation_call_builder";
import { TradesCallBuilder } from "./trades_call_builder";
import { TransactionCallBuilder } from "./transaction_call_builder";
export declare const SUBMIT_TRANSACTION_TIMEOUT: number;
export declare class Server {
    readonly serverURL: URI;
    constructor(serverURL: string, opts?: Server.Options);
    fetchTimebounds(seconds: number, _isRetry?: boolean): Promise<Server.Timebounds>;
    fetchBaseFee(): Promise<number>;
    feeStats(): Promise<Horizon.FeeStatsResponse>;
    submitTransaction(transaction: Transaction | FeeBumpTransaction, opts?: Server.SubmitTransactionOptions): Promise<Horizon.SubmitTransactionResponse>;
    accounts(): AccountCallBuilder;
    claimableBalances(): ClaimableBalanceCallBuilder;
    ledgers(): LedgerCallBuilder;
    transactions(): TransactionCallBuilder;
    offers(): OfferCallBuilder;
    orderbook(selling: Asset, buying: Asset): OrderbookCallBuilder;
    trades(): TradesCallBuilder;
    operations(): OperationCallBuilder;
    liquidityPools(): LiquidityPoolCallBuilder;
    strictReceivePaths(source: string | Asset[], destinationAsset: Asset, destinationAmount: string): PathCallBuilder;
    strictSendPaths(sourceAsset: Asset, sourceAmount: string, destination: string | Asset[]): PathCallBuilder;
    payments(): PaymentCallBuilder;
    effects(): EffectCallBuilder;
    friendbot(address: string): FriendbotBuilder;
    assets(): AssetsCallBuilder;
    loadAccount(accountId: string): Promise<AccountResponse>;
    tradeAggregation(base: Asset, counter: Asset, start_time: number, end_time: number, resolution: number, offset: number): TradeAggregationCallBuilder;
    checkMemoRequired(transaction: Transaction | FeeBumpTransaction): Promise<void>;
}
export declare namespace Server {
    interface Options {
        allowHttp?: boolean;
        appName?: string;
        appVersion?: string;
    }
    interface Timebounds {
        minTime: number;
        maxTime: number;
    }
    interface SubmitTransactionOptions {
        skipMemoRequiredCheck?: boolean;
    }
}
