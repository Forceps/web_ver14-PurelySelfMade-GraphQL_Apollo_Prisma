import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface seeUserArgsTypes {
  user_id: number;
}
export default {
  Query: {
    seeUser: async (_: null, args: seeUserArgsTypes) => {
      const { user_id } = args;
      try {
        return prisma.user.findOne({ where: { user_id } });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
