import { PrismaClient } from "@prisma/client";
import { SeeUserQueryArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    seeUser: async (_: void, args: SeeUserQueryArgs) => {
      const { user_id } = args;
      try {
        return prisma.user.findOne({ where: { user_id } });
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
