import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    seeUser: async (_, args) => {
      const { user_id } = args;
      try {
        return prisma.user.findOne({ where: { user_id } });
      } catch (e) {
        console.log(e);
      }
    }
  }
};
