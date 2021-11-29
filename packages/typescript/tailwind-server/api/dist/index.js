"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const api = (0, express_1.default)();
exports.api = api;
api.use(express_1.default.static(path_1.default.join(process.cwd(), 'public')));
//# sourceMappingURL=index.js.map