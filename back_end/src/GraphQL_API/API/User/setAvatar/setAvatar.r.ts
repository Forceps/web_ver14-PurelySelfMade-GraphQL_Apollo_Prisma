import { PrismaClient } from "@prisma/client";
import { SetAvatarMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    setAvatar: async (
      _: void,
      args: SetAvatarMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { avatar } = args;
      const { user } = request;

      try {
        await prisma.user.update({
          data: {
            avatar,
          },
          where: { user_id: user.user_id },
        });
        return {
          ok: true,
          error: null,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: e.message,
        };
      }
    },
  },
};
