import { PrismaClient, user } from "@prisma/client";
import { CreateAccountMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createAccount: async (_: void, args: CreateAccountMutationArgs) => {
      const { username, email, password } = args;
      try {
        const exists = await prisma.user.findOne({ where: { email } });
        if (exists) {
          throw Error("This email is already taken");
        }
        await prisma.user.create({
          data: {
            username,
            email,
            password,
          },
        });
        const retry: user | null = await prisma.user.findOne({
          where: { email },
        });
        if (retry !== null) {
          await prisma.directory.create({
            data: {
              name: "My Post",
              user_directoryTouser: {
                connect: { user_id: retry.user_id },
              },
              root: true,
            },
          });
          await prisma.directory.create({
            data: {
              name: "My Archive",
              user_directoryTouser: {
                connect: { user_id: retry.user_id },
              },
              root: true,
            },
          });
        }
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
