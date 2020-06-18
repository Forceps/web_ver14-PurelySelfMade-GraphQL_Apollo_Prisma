import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    findMyArchiveDir: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { directory_id } = args;
      try {
        if (directory_id === 0) {
          const ret = await prisma.directory.findMany({
            where: {
              root: true,
              name: "My Archive",
              user: { user_id: user.user_id },
            },
            include: { directory: true, image: true, video: true, music: true },
          });
          return ret[0];
        } else {
          return prisma.directory.findOne({
            where: { directory_id },
            include: {
              parent_id: true,
              directory: true,
              image: true,
              video: true,
              music: true,
            },
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
