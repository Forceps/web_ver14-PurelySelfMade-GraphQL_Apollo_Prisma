import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface setBackImgArgsTypes {
  back_img: string;
}
export default {
  Mutation: {
    setBackImg: async (
      _: null,
      args: setBackImgArgsTypes,
      { request, isAuthenticated }: any
    ) => {
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
