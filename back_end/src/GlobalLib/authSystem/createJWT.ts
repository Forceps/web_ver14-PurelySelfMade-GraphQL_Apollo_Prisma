import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });
import jwt from "jsonwebtoken";

export default (id: number): string => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET || ""
  );
  return token;
};
