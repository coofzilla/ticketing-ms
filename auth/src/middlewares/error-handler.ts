import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Something went wrong", err);

  res.status(400).send({
    //string from throw new Error assigned to message
    message: err.message,
  });
};
