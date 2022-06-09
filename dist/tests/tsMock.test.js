"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var tsMock_1 = require("../lib/tsMock");
var getApiFiles_1 = require("./getApiFiles");
describe('tsMock', function () {
    var files = (0, getApiFiles_1.getApiFiles)();
    var mockData = (0, tsMock_1.tsMock)(files).generateMock('IFoo');
    chai_1.assert.equal(mockData.a, 123);
});
describe('tsMockService', function () {
    var files = (0, getApiFiles_1.getApiFiles)();
    var mocker = (0, tsMock_1.tsMockService)(files);
    var mockData = mocker.generateMock('IFoo');
    chai_1.assert.equal(mockData.a, 123);
});
//# sourceMappingURL=tsMock.test.js.map