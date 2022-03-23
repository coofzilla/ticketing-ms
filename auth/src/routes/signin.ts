import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("must be valid email"),
    body("password").trim().notEmpty().withMessage("must supply password"),
  ],
  validateRequest,
  (req: Request, res: Response) => {}
);

export { router as signinRouter };
