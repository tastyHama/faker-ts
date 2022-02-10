"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsWatcher = void 0;
var events_1 = __importDefault(require("events"));
var typescript_1 = __importDefault(require("typescript"));
var formatHost = {
    getCanonicalFileName: function (path) { return path; },
    getCurrentDirectory: typescript_1.default.sys.getCurrentDirectory,
    getNewLine: function () { return typescript_1.default.sys.newLine; },
};
function tsWatcher(rootFiles, options) {
    var createProgram = typescript_1.default.createSemanticDiagnosticsBuilderProgram;
    var host = typescript_1.default.createWatchCompilerHost(rootFiles, options, typescript_1.default.sys, createProgram, reportDiagnostic, reportWatchStatusChanged);
    var emitter = new events_1.default();
    var origPostProgramCreate = host.afterProgramCreate;
    host.afterProgramCreate = function (program) {
        console.log('** We finished making the program! **');
        emitter.emit('afterProgramCreate', program);
        origPostProgramCreate(program);
    };
    setImmediate(function () {
        typescript_1.default.createWatchProgram(host);
    });
    return emitter;
}
exports.tsWatcher = tsWatcher;
function reportDiagnostic(diagnostic) {
    console.error('Error', diagnostic.code, ':', typescript_1.default.flattenDiagnosticMessageText(diagnostic.messageText, formatHost.getNewLine()));
}
function reportWatchStatusChanged(diagnostic) {
    console.info(typescript_1.default.formatDiagnostic(diagnostic, formatHost));
}
//# sourceMappingURL=tsWatcher.js.map