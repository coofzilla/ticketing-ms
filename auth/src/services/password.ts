import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

//scrypt callBack based; hence promisify
const scryptAsync = promisify(scrypt);

export class Password {
  static async toHash(password: string) {
    const salt = randomBytes(8).toString("hex");
    const buffer = (await scryptAsync(password, salt, 64)) as Buffer;
  }

  static compare(storePassword: string, suppliedPassword: string) {}
}
