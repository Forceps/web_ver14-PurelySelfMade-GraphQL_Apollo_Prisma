import { PrismaClient } from "@prisma/client";
import { SeeUserQueryArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    seeUser: async (_: void, args: SeeUserQueryArgs) => {
      const { user_id } = args;
      try {
        const data = await prisma.user.findOne({ where: { user_id } });
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
