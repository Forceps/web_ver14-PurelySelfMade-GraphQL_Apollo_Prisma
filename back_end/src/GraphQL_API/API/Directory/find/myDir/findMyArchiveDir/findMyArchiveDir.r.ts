import { PrismaClient } from "@prisma/client";
import { FindMyArchiveDirQueryArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    findMyArchiveDir: async (
      _: void,
      args: FindMyArchiveDirQueryArgs,
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
              name: "My Archive",
              user: user.user_id,
            },
            include: {
              other_directory: true,
              image: true,
              video: true,
              music: true,
            },
          });
          data = ret[0];
        } else {
          data = await prisma.directory.findOne({
            where: { directory_id },
            include: {
              directory: true,
              other_directory: true,
              image: true,
              video: true,
              music: true,
            },
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
