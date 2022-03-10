export abstract class CustomError extends Error {
  //using abstract, subclass must implement
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    //set the prototype explicitly
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract serializeErrors(): { message: string; field?: string }[];
}
