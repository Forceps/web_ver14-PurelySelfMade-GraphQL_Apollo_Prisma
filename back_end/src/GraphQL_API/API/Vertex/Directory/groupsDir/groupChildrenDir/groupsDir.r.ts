import { PrismaClient } from "@prisma/client";
import { GroupsDirQueryArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    groupsDir: async (_: void, args: GroupsDirQueryArgs) => {
      const { directory_id } = args;
      try {
        return prisma.directory.findOne({
          where: { directory_id },
          include: { directory: true, other_directory: true, post: true },
        });
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
