"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.followRedirect = followRedirect;
// src/utils/urlValidator.ts
function followRedirect(url_1) {
    return __awaiter(this, arguments, void 0, function* (url, maxRedirects = 5) {
        let currentUrl = url;
        for (let i = 0; i < maxRedirects; i++) {
            const response = yield fetch(currentUrl, { method: 'HEAD', redirect: 'manual' });
            if (response.status >= 300 && response.status < 400 && response.headers.get('location')) {
                currentUrl = response.headers.get('location');
            }
            else {
                return currentUrl;
            }
        }
        throw new Error('Too many redirects');
    });
}