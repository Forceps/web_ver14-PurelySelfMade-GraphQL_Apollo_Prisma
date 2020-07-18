import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    myWatchingLog: async (_: void, __: void, { req, isAuthenticated }: any) => {
      isAuthenticated(req);
      try {
        const result = await prisma.post.findMany({
          where: {
            watched: {
              some: {
                user: req.user.user_id,
              },
            },
          },
          include: { user_postTouser: true },
          orderBy: { post_id: "desc" },
          take: 20,
        });
        return result;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
