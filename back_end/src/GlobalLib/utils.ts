import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });
import jwt from "jsonwebtoken";

const secret: any = process.env.JWT_SECRET;
export const generateToken = (id: string) => jwt.sign({ id }, secret);
