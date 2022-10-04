"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_1 = require("../controllers/clients");
const router = (0, express_1.Router)();
router.post('/', clients_1.getClientsFilter);
exports.default = router;
//# sourceMappingURL=clients.js.map