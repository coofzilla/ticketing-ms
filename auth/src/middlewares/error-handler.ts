import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/request-validation-errors";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    console.log("handling error as request validation");
  }
  if (err instanceof DatabaseConnectionError) {
    console.log("handling error as db connection error");
  }

  res.status(400).send({
    //string from throw new Error assigned to message
    message: err.message,
  });
};
