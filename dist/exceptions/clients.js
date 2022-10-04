"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = exports.responseError = exports.clientExceptions = void 0;
const clientExceptions = (initialCode, finalCode) => {
    const validParams = (0, exports.validateParams)({ initialCode, finalCode });
    if (validParams.length > 0) {
        return validParams;
    }
};
exports.clientExceptions = clientExceptions;
const responseError = (msg, locations) => {
    const err = {
        status: "ERROR",
        messages: locations.map((error) => {
            const message = {
                status: "ERROR",
                message: msg,
                locator: error,
            };
            return message;
        }),
    };
    return err;
};
exports.responseError = responseError;
const validateParams = (params) => {
    const missingValues = [];
    for (let item in params) {
        !params[item] ? missingValues.push(item) : null;
        isNaN(Number(params[item])) ? missingValues.push(item) : null;
    }
    return missingValues;
};
exports.validateParams = validateParams;
//# sourceMappingURL=clients.js.map