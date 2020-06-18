import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    groupDetail: async (_, args) => {
      const { group_id } = args;
      try {
        return prisma.groups.findOne({
          where: { group_id },
          include: { administrator: true },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
