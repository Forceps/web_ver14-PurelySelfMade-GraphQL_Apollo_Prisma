import { PrismaClient } from "@prisma/client";
import { FindMyPostDirQueryArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    findMyPostDir: async (
      _: void,
      args: FindMyPostDirQueryArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { directory_id } = args;
      try {
        let data: any = {};
        if (directory_id === 0) {
          const ret = await prisma.directory.findMany({
            where: {
              root: true,
              name: "My Post",
              user: user.user_id,
            },
            include: { other_directory: true, post: true },
          });
          data = ret[0];
        } else {
          data = await prisma.directory.findOne({
            where: { directory_id },
            include: { directory: true, other_directory: true, post: true },
          });
        }
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
