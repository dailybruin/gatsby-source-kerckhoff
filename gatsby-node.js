"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const crypto_1 = require("crypto");
exports.sourceNodes = ({ actions: { createNode }, createNodeId }, options) => __awaiter(this, void 0, void 0, function* () {
    const url = `https://kerckhoff.dailybruin.com/api/packages/flatpages/${options.slug}`;
    const response = yield node_fetch_1.default(url);
    const json = yield response.json();
    const data = json['data'];
    console.log(data);
    Object.keys(data).forEach(key => {
        const value = data[key];
        createNode(Object.assign({}, value, { id: createNodeId(`kerckhoff-${key}`), parent: null, children: [], internal: {
                type: 'KerckhoffArticle',
                content: JSON.stringify(value),
                contentDigest: crypto_1.createHash('md5')
                    .update(JSON.stringify(value))
                    .digest('hex'),
            } }));
    });
});
