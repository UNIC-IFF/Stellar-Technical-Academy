"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCallBuilder = void 0;
var tslib_1 = require("tslib");
var call_builder_1 = require("./call_builder");
var AccountCallBuilder = (function (_super) {
    tslib_1.__extends(AccountCallBuilder, _super);
    function AccountCallBuilder(serverUrl) {
        var _this = _super.call(this, serverUrl) || this;
        _this.url.segment("accounts");
        return _this;
    }
    AccountCallBuilder.prototype.accountId = function (id) {
        var builder = new call_builder_1.CallBuilder(this.url.clone());
        builder.filter.push([id]);
        return builder;
    };
    AccountCallBuilder.prototype.forSigner = function (id) {
        this.url.setQuery("signer", id);
        return this;
    };
    AccountCallBuilder.prototype.forAsset = function (asset) {
        this.url.setQuery("asset", "" + asset);
        return this;
    };
    AccountCallBuilder.prototype.sponsor = function (id) {
        this.url.setQuery("sponsor", id);
        return this;
    };
    AccountCallBuilder.prototype.forLiquidityPool = function (id) {
        this.url.setQuery("liquidity_pool", id);
        return this;
    };
    return AccountCallBuilder;
}(call_builder_1.CallBuilder));
exports.AccountCallBuilder = AccountCallBuilder;
//# sourceMappingURL=account_call_builder.js.map