import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    deleteLike: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { liked_id } = args;
      try {
        await prisma.liked.delete({
          where: { liked_id },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
