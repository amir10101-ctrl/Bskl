"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localizeUrl = localizeUrl;
function localizeUrl(base, lang) {
    const url = new URL(base);
    url.pathname = `/${lang}${url.pathname}`;
    return url.toString();
}
