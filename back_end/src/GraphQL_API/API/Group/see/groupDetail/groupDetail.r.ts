import { PrismaClient } from "@prisma/client";
import { GroupDetailQueryArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    groupDetail: async (_: void, args: GroupDetailQueryArgs) => {
      const { group_id } = args;
      try {
        const data = await prisma.group.findOne({
          where: { group_id },
          include: { user: true },
        });
        return {
          ok: true,
          error: null,
          data,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: e.message,
          data: null,
        };
      }
    },
  },
};
