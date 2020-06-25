import { PrismaClient } from "@prisma/client";
import { GroupsDirQueryArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    groupsDir: async (_: void, args: GroupsDirQueryArgs) => {
      const { directory_id } = args;
      try {
        const data = await prisma.directory.findOne({
          where: { directory_id },
          include: { directory: true, other_directory: true, post: true },
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
