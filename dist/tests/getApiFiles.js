"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiFiles = void 0;
var fs = __importStar(require("fs"));
var path_1 = __importDefault(require("path"));
var getApiFiles = function () {
    var dir = path_1.default.resolve(__dirname, 'mocks');
    return fs
        .readdirSync(dir)
        .filter(function (fileName) {
        return fileName.length >= 3 && fileName.substr(fileName.length - 3, 3) === '.ts';
    })
        .map(function (vo) { return path_1.default.join(dir, vo); });
};
exports.getApiFiles = getApiFiles;
//# sourceMappingURL=getApiFiles.js.map