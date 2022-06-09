"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getApiFiles_1 = require("./getApiFiles");
var koaServer_1 = require("./koaServer");
(0, koaServer_1.createServer)((0, getApiFiles_1.getApiFiles)()).listen(3000);
//# sourceMappingURL=server.js.map