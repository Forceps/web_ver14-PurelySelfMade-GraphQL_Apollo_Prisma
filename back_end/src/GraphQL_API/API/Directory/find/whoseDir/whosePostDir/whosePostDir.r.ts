import { PrismaClient } from "@prisma/client";
import { WhosePostDirQueryArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    whosePostDir: async (_: void, args: WhosePostDirQueryArgs) => {
      const { user_id } = args;
      try {
        let data: any = {};
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
        data = ret[0];
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
