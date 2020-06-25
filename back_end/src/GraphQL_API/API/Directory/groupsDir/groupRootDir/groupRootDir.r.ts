import { PrismaClient } from "@prisma/client";
import { GroupRootDirQueryArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    groupRootDir: async (_: void, args: GroupRootDirQueryArgs) => {
      const { group_id } = args;
      try {
        const ret = await prisma.directory.findMany({
          where: {
            root: true,
            group: group_id,
          },
          include: { other_directory: true, post: true },
        });
        const data = ret[0];
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
