import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface groupDetailArgsTypes {
  group_id: number;
}
export default {
  Query: {
    groupDetail: async (_: null, args: groupDetailArgsTypes) => {
      const { group_id } = args;
      try {
        return prisma.group.findOne({
          where: { group_id },
          include: { user: true },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
