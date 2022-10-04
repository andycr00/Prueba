import { Request, Response } from "express";
import * as fs from "fs";
import axios from "axios";

import { clientExceptions, responseError } from "../exceptions/clients";
import { readData, saveData } from "../db/file";
import { IDataStructure } from "../models/response";

export const getClientsFilter = async (req: Request, res: Response) => {
  const { initialCode, finalCode } = req.query;

  const validateParams = clientExceptions(
    initialCode as string,
    finalCode as string
  );
  if (validateParams) {
    return res
      .status(400)
      .json(
        responseError("Error en validación datos de entrada", validateParams)
      );
  }

  const data = readData();
  const date = new Date(data.date);
  const time = new Date().getTime() - date.getTime();
  console.log({ time });
  if (time < 30000) {
    return res.status(200).json(data.data);
  }

  let matches: {}[] = [];

  for (let index = Number(initialCode); index <= Number(finalCode); index++) {
    try {
      await axios.get(process.env.API_URL! + index.toString()).then((resp) => {
        if (resp.data.message == "Data found") {
          matches.push(resp.data.data);
        } else {
          throw new Error(index.toString());
        }
      });
    } catch (error) {
      return res
        .status(404)
        .json(
          responseError("Error no se encuentra para rango especificado", [
            `${error}`,
          ])
        );
    }
  }

  saveData(JSON.stringify({ date: new Date(), data: matches }));

  const info = matches.sort((a: IDataStructure, b: IDataStructure) =>
    a.name! > b.name! ? 1 : -1
  );

  console.log( {info} );

  return res.status(200).json(info);
};
