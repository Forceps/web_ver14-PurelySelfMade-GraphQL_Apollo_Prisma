import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    addSubscriber: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { author } = args;
      try {
        const already_exists = await prisma.subscriber.findMany({
          where: {
            author: { user_id: author },
            reader: { user_id: user.user_id },
          },
        });
        if (already_exists.length === 0) {
          await prisma.subscriber.create({
            data: {
              author: {
                connect: { user_id: author },
              },
              reader: {
                connect: { user_id: user.user_id },
              },
            },
          });
        }
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
