import { IErrorResponse, IMessageError } from "../models/response";

export const clientExceptions = (initialCode: string, finalCode: string) => {
  const validParams = validateParams({ initialCode, finalCode });

  if (validParams.length > 0) {
    return validParams;
  }
};

export const responseError = (
  msg: string,
  locations: string[]
): IErrorResponse => {
  const err: IErrorResponse = {
    status: "ERROR",
    messages: locations.map((error: string): IMessageError => {
      const message: IMessageError = {
        status: "ERROR",
        message: msg,
        locator: error,
      };
      return message;
    }),
  };
  return err;
};

export const validateParams = (params: { [key: string]: any }) => {
  const missingValues: string[] = [];

  for (let item in params) {
    !params[item] ? missingValues.push(item) : null;
    Number(params[item]) == NaN ? missingValues.push(item) : null;
  }

  return missingValues;
};
