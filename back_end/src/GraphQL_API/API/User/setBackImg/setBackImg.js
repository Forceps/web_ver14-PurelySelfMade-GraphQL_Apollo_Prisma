import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    setBackImg: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { back_img } = args;
      const { user } = request;

      try {
        await prisma.user.update({
          data: {
            back_img,
          },
          where: { user_id: user.user_id },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
