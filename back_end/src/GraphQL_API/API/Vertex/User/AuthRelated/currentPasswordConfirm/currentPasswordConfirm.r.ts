import { PrismaClient, user } from "@prisma/client";
import { generateToken } from "../../../../../../GlobalLib/authSystem/utils";
import { contextType } from "../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    currentPasswordConfirm: async (_: void, { current_password },
      { req, isAuthenticated }: contextType) => {
        isAuthenticated(req)
      try {
        const realPW = req.
        if (user !== null) {
          if (password === user.password) {
            return generateToken(user.user_id);
          } else {
            return "WorngPW";
          }
        } else {
          return "emailNotExist";
        }
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
