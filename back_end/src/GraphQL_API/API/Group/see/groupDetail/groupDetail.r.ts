import { PrismaClient } from "@prisma/client";
import { GroupDetailQueryArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    groupDetail: async (_: void, args: GroupDetailQueryArgs) => {
      const { group_id } = args;
      try {
        return prisma.group.findOne({
          where: { group_id },
          include: { user: true },
        });
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
