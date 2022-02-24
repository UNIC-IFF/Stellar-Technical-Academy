"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferCallBuilder = void 0;
var tslib_1 = require("tslib");
var call_builder_1 = require("./call_builder");
var OfferCallBuilder = (function (_super) {
    tslib_1.__extends(OfferCallBuilder, _super);
    function OfferCallBuilder(serverUrl) {
        var _this = _super.call(this, serverUrl, "offers") || this;
        _this.url.segment("offers");
        return _this;
    }
    OfferCallBuilder.prototype.offer = function (offerId) {
        var builder = new call_builder_1.CallBuilder(this.url.clone());
        builder.filter.push([offerId]);
        return builder;
    };
    OfferCallBuilder.prototype.forAccount = function (id) {
        return this.forEndpoint("accounts", id);
    };
    OfferCallBuilder.prototype.buying = function (asset) {
        if (!asset.isNative()) {
            this.url.setQuery("buying_asset_type", asset.getAssetType());
            this.url.setQuery("buying_asset_code", asset.getCode());
            this.url.setQuery("buying_asset_issuer", asset.getIssuer());
        }
        else {
            this.url.setQuery("buying_asset_type", "native");
        }
        return this;
    };
    OfferCallBuilder.prototype.selling = function (asset) {
        if (!asset.isNative()) {
            this.url.setQuery("selling_asset_type", asset.getAssetType());
            this.url.setQuery("selling_asset_code", asset.getCode());
            this.url.setQuery("selling_asset_issuer", asset.getIssuer());
        }
        else {
            this.url.setQuery("selling_asset_type", "native");
        }
        return this;
    };
    OfferCallBuilder.prototype.sponsor = function (id) {
        this.url.setQuery("sponsor", id);
        return this;
    };
    return OfferCallBuilder;
}(call_builder_1.CallBuilder));
exports.OfferCallBuilder = OfferCallBuilder;
//# sourceMappingURL=offer_call_builder.js.map