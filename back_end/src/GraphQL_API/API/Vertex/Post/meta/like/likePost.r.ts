import { PrismaClient } from "@prisma/client";
import { LikePostMutationArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
import { contextType } from "../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Mutation: {
    likePost: async (
      _: void,
      args: LikePostMutationArgs,
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      const { post_id } = args;

      try {
        await prisma.executeRaw`UPDATE square_post.post SET likes = likes + 1 WHERE post_id = ${post_id}`;

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
