import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default (token: string) => {
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "");
    return prisma.user.findOne({
      where: { user_id: decoded.id },
      include: {
        chat_member: true,
      },
    });
  } catch (e) {
    console.log("⚠ error catched at 'decodeJWT.ts'", e);
    return undefined;
  }
};

export const createJWT = (id: number): string => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET || ""
  );
  return token;
};
