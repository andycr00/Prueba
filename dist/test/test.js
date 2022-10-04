"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clients_1 = require("../exceptions/clients");
clients_1.clientExceptions;
test("Invalid Final Code", () => {
    expect((0, clients_1.clientExceptions)("1", "")).toStrictEqual(["finalCode"]);
});
clients_1.clientExceptions;
test("Invalid Initial Code", () => {
    expect((0, clients_1.clientExceptions)("asd", "10")).toStrictEqual(["initialCode"]);
});
//# sourceMappingURL=test.js.map