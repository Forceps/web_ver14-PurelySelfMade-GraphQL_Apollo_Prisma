import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface findMyPostDirArgsTypes {
  directory_id: number;
}
export default {
  Query: {
    findMyPostDir: async (
      _: null,
      args: findMyPostDirArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
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
      }
    },
  },
};
