/// <reference types="eventsource" />
import URI from "urijs";
import { Horizon } from "./horizon_api";
import { ServerApi } from "./server_api";
export interface EventSourceOptions<T> {
    onmessage?: (value: T) => void;
    onerror?: (event: MessageEvent) => void;
    reconnectTimeout?: number;
}
export declare class CallBuilder<T extends Horizon.FeeStatsResponse | Horizon.BaseResponse | ServerApi.CollectionPage<Horizon.BaseResponse>> {
    protected url: URI;
    filter: string[][];
    protected originalSegments: string[];
    protected neighborRoot: string;
    constructor(serverUrl: URI, neighborRoot?: string);
    call(): Promise<T>;
    stream(options?: EventSourceOptions<T>): () => void;
    cursor(cursor: string): this;
    limit(recordsNumber: number): this;
    order(direction: "asc" | "desc"): this;
    join(include: "transactions"): this;
    protected forEndpoint(endpoint: string, param: string): this;
    private checkFilter;
    private _requestFnForLink;
    private _parseRecord;
    private _sendNormalRequest;
    private _parseResponse;
    private _toCollectionPage;
    private _handleNetworkError;
}
