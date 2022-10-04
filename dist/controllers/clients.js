"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientsFilter = void 0;
const axios_1 = __importDefault(require("axios"));
const clients_1 = require("../exceptions/clients");
const file_1 = require("../db/file");
const getClientsFilter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { initialCode, finalCode } = req.query;
    const validateParams = (0, clients_1.clientExceptions)(initialCode, finalCode);
    if (validateParams) {
        return res
            .status(400)
            .json((0, clients_1.responseError)("Error en validación datos de entrada", validateParams));
    }
    const data = (0, file_1.readData)();
    const date = new Date(data.date);
    const time = new Date().getTime() - date.getTime();
    console.log({ time });
    if (time < 30000) {
        return res.status(200).json(data.data);
    }
    let matches = [];
    for (let index = Number(initialCode); index <= Number(finalCode); index++) {
        try {
            yield axios_1.default.get(process.env.API_URL + index.toString()).then((resp) => {
                if (resp.data.message == "Data found") {
                    matches.push(resp.data.data);
                }
                else {
                    throw new Error(index.toString());
                }
            });
        }
        catch (error) {
            return res
                .status(404)
                .json((0, clients_1.responseError)("Error no se encuentra para rango especificado", [
                `${error}`,
            ]));
        }
    }
    (0, file_1.saveData)(JSON.stringify({ date: new Date(), data: matches }));
    const info = matches.sort((a, b) => a.name > b.name ? 1 : -1);
    console.log({ info });
    return res.status(200).json(info);
});
exports.getClientsFilter = getClientsFilter;
//# sourceMappingURL=clients.js.map