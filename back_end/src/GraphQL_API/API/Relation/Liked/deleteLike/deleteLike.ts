import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface addCommentArgsTypes {
  liked_id: number;
}
export default {
  Mutation: {
    deleteLike: async (
      _: null,
      args: addCommentArgsTypes,
      { request, isAuthenticated }: any
    ) => {
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
