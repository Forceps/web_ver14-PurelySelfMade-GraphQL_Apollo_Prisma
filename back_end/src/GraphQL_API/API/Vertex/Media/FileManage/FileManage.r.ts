import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Query: {
    FileManage: async (_: void, __: void, { req, isAuthenticated }: any) => {
      isAuthenticated(req);
      const { user } = req;
      try {
        await prisma.image.findMany({
          where: {
            directory_directoryToimage: {
              user: user.user_id,
            },
          },
          select: {
            volume: true,
          },
        });
        return null;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
