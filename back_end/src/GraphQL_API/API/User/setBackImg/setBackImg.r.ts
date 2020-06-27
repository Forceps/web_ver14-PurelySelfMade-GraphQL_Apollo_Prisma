import { PrismaClient } from "@prisma/client";
import { SetBackImgMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    setBackImg: async (
      _: void,
      args: SetBackImgMutationArgs,
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
      const { back_img } = args;
      const { user } = req;

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
