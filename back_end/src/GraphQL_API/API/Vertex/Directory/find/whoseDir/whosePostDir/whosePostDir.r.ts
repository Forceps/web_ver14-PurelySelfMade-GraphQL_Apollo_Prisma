import { PrismaClient } from "@prisma/client";
import { WhosePostDirQueryArgs } from "../../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    whosePostDir: async (_: void, args: WhosePostDirQueryArgs) => {
      const { user_id } = args;
      try {
        const ret = await prisma.directory.findMany({
          where: {
            root: true,
            name: "My Post",
            user: user_id,
          },
          include: {
            other_directory: {
              include: {
                other_directory: true,
              },
            },
            post: true,
          },
        });
        return ret[0];
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
