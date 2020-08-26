import { PrismaClient } from "@prisma/client";
import { CreateAccountMutationArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
import { S_N_to_N } from "../../../../../../GlobalLib/recycleFunction/type_convert";
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
        const OurMember = await prisma.user.create({
          data: {
            username,
            email,
            password,
          },
        });
        if (OurMember !== null) {
          const user_id = S_N_to_N(OurMember.user_id);
          await prisma.directory.create({
            data: {
              name: "My Post",
              user_directoryTouser: {
                connect: { user_id },
              },
              root: true,
            },
          });
          await prisma.directory.create({
            data: {
              name: "My Archive",
              user_directoryTouser: {
                connect: { user_id },
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
