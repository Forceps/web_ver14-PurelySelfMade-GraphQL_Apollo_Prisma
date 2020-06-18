import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    seeGroups: async () => {
      try {
        return prisma.group.findMany({
          include: { administrator: true },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
