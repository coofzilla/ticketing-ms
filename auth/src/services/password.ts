import { scrypt, randomBytes } from "crypto";
import { json } from "express";
import { promisify } from "util";

//scrypt callBack based; hence promisify
const scryptAsync = promisify(scrypt);

export class Password {
  static async toHash(password: string) {
    const salt = randomBytes(8).toString("hex");
    const buffer = (await scryptAsync(password, salt, 64)) as Buffer;

    console.log(buffer);

    return `${buffer.toString("hex")}.${salt}`;
  }

  static async compare(storePassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storePassword.split(".");
    const buffer = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;

    return buffer.toString("hex") === hashedPassword;
  }
}
