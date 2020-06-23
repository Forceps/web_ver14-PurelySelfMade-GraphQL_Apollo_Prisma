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
        return ret[0];
      } catch (e) {
        console.log(e);
      }
    },
  },
};
