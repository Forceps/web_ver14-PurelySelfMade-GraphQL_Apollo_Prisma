import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createAccount: async (_, args) => {
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
        const retry = await prisma.user.findOne({ where: { email } });
        console.log(retry);
        await prisma.directory.create({
          data: {
            name: "My Post",
            user: {
              connect: { user_id: retry.user_id },
            },
            root: true,
          },
        });
        await prisma.directory.create({
          data: {
            name: "My Archive",
            user: {
              connect: { user_id: retry.user_id },
            },
            root: true,
          },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
