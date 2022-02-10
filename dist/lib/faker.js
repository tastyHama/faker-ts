"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakerGenerate = exports.getMock = void 0;
var faker_1 = __importDefault(require("@faker-js/faker"));
var json_schema_faker_1 = __importDefault(require("json-schema-faker"));
json_schema_faker_1.default.option('useExamplesValue', true);
json_schema_faker_1.default.option('useDefaultValue', true);
json_schema_faker_1.default.extend('faker', function () { return faker_1.default; });
var getMock = function (schema) { return json_schema_faker_1.default.resolve(schema); };
exports.getMock = getMock;
var fakerGenerate = function (schema) { return json_schema_faker_1.default.generate(schema, []); };
exports.fakerGenerate = fakerGenerate;
//# sourceMappingURL=faker.js.map