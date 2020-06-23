import { PrismaClient } from "@prisma/client";
import { WatchedMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    watched: async (
      _: void,
      args: WatchedMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { post_id } = args;
      try {
        await prisma.watched.create({
          data: {
            user_userTowatched: {
              connect: { user_id: user.user_id },
            },
            post_postTowatched: {
              connect: { post_id },
            },
          },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
