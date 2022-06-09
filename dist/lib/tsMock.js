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
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsMock = exports.tsMockService = exports.TsMocker = void 0;
var ts = __importStar(require("typescript"));
var typescript_json_schema_1 = require("typescript-json-schema");
var faker_1 = require("./faker");
var tsWatcher_1 = require("./tsWatcher");
var utils_1 = require("./utils");
var TsMocker = (function () {
    function TsMocker(program) {
        if (program) {
            this.setProgram(program);
        }
    }
    TsMocker.prototype.setProgram = function (program) {
        var generator = (0, typescript_json_schema_1.buildGenerator)(program, { required: true });
        if (generator === null) {
            throw new Error('generator is null');
        }
        this.program = program;
        this.generator = generator;
    };
    TsMocker.prototype.generateSchema = function (fullTypeName, onlyIncludeFiles) {
        if (fullTypeName === void 0) { fullTypeName = '*'; }
        var generator = this.generator;
        if (fullTypeName === '*') {
            return generator.getSchemaForSymbols(generator.getMainFileSymbols(this.program, onlyIncludeFiles));
        }
        else {
            return generator.getSchemaForSymbol(fullTypeName);
        }
    };
    TsMocker.prototype.generateMock = function (fullTypeName, onlyIncludeFiles) {
        return (0, faker_1.fakerGenerate)(this.generateSchema(fullTypeName, onlyIncludeFiles));
    };
    return TsMocker;
}());
exports.TsMocker = TsMocker;
function tsMockService(files, jsonCompilerOptions, basePath) {
    var mocker = new TsMocker();
    var options = (0, utils_1.getTsOptions)(jsonCompilerOptions, basePath);
    (0, tsWatcher_1.tsWatcher)(files, options).on('afterProgramCreate', function (p) {
        try {
            mocker.setProgram(p.getProgram());
        }
        catch (error) {
            console.error(error.meesage);
        }
    });
    return mocker;
}
exports.tsMockService = tsMockService;
function tsMock(files, jsonCompilerOptions, basePath) {
    var options = (0, utils_1.getTsOptions)(jsonCompilerOptions, basePath);
    var mocker = new TsMocker(ts.createProgram(files, options));
    return mocker;
}
exports.tsMock = tsMock;
//# sourceMappingURL=tsMock.js.map