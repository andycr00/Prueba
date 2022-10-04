"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clients_1 = __importDefault(require("../routes/clients"));
class Server {
    constructor() {
        this.apiPath = {
            clients: "/entities/filter",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        this.routes();
    }
    routes() {
        this.app.use(this.apiPath.clients, clients_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port: " + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map