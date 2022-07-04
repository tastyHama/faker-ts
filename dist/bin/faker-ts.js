#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var faker_ts_1 = require("../faker-ts");
var command = commander_1.default.createCommand("0.0.1");
command
    .usage("<file> <symbol>")
    .action(function (file, symbol) {
    var mocker = (0, faker_ts_1.tsMock)([file]);
    console.log(JSON.stringify(mocker.generateMock(symbol), null, 2));
});
command.parse(process.argv);
//# sourceMappingURL=faker-ts.js.map