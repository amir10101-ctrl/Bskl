"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = exports.Req = exports.Middleware = exports.Lang = exports.BuildLinkTester = exports.CheckSecurityLink = exports.ShortLinkGen = exports.addMultipleParams = exports.updateQueryParam = exports.removeQueryParam = exports.addQueryParam = exports.ObjectingUrl = exports.ValidateURL = exports.ParseURL = void 0;
exports.ParseURL = __importStar(require("./utils/urlParser"));
exports.ValidateURL = __importStar(require("./utils/urlValidator"));
exports.ObjectingUrl = __importStar(require("./utils/linkBuilder"));
var queryManager_1 = require("./utils/queryManager");
Object.defineProperty(exports, "addQueryParam", { enumerable: true, get: function () { return queryManager_1.addQueryParam; } });
Object.defineProperty(exports, "removeQueryParam", { enumerable: true, get: function () { return queryManager_1.removeQueryParam; } });
Object.defineProperty(exports, "updateQueryParam", { enumerable: true, get: function () { return queryManager_1.updateQueryParam; } });
Object.defineProperty(exports, "addMultipleParams", { enumerable: true, get: function () { return queryManager_1.addMultipleParams; } });
exports.ShortLinkGen = __importStar(require("./utils/shortLinkGenerator"));
exports.CheckSecurityLink = __importStar(require("./utils/securityChecker"));
exports.BuildLinkTester = __importStar(require("./utils/bulkLinkTester"));
exports.Lang = __importStar(require("./utils/i18n"));
exports.Middleware = __importStar(require("./http/middleware"));
exports.Req = __importStar(require("./http/requestManager"));
var cacheManager_1 = require("./http/cacheManager");
Object.defineProperty(exports, "Cache", { enumerable: true, get: function () { return cacheManager_1.Cache; } });
