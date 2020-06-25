import { PrismaClient, user } from "@prisma/client";
import { generateToken } from "../../../../GlobalLib/authSystem/utils";
import { LoginUserMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    loginUser: async (_: void, args: LoginUserMutationArgs) => {
      const { email, password } = args;
      try {
        const user: user | null = await prisma.user.findOne({
          where: { email },
        });
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
        return "error happened";
      }
    },
  },
};
