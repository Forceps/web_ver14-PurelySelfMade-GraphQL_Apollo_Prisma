import { PrismaClient } from "@prisma/client";
import { FindMyPostDirQueryArgs } from "../../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    findMyPostDir: async (
      _: void,
      args: FindMyPostDirQueryArgs,
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
      const { user } = req;
      const { directory_id } = args;
      try {
        if (directory_id === 0) {
          const ret = await prisma.directory.findMany({
            where: {
              root: true,
              name: "My Post",
              user: user.user_id,
            },
            include: { other_directory: true, post: true },
          });
          return ret[0];
        } else {
          return prisma.directory.findOne({
            where: { directory_id },
            include: { directory: true, other_directory: true, post: true },
          });
        }
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
