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
exports.tsMock = void 0;
var json_schema_faker_1 = __importDefault(require("json-schema-faker"));
var ts = __importStar(require("typescript"));
var typescript_json_schema_1 = require("typescript-json-schema");
function tsMock(symbol, file, compilerOptions) {
    var program = ts.createProgram([file], compilerOptions);
    var schema = (0, typescript_json_schema_1.generateSchema)(program, symbol);
    return json_schema_faker_1.default.generate(schema, []);
}
exports.tsMock = tsMock;
//# sourceMappingURL=tt.js.map