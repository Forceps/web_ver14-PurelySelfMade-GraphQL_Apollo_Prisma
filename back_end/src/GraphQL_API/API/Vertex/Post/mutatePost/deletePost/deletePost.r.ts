import { PrismaClient } from "@prisma/client";
import { DeletePostMutationArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
import { contextType } from "../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Mutation: {
    deletePost: async (
      _: void,
      args: DeletePostMutationArgs,
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      const { post_id } = args;
      try {
        await prisma.executeRaw`DELETE FROM square_post.post WHERE post_id = ${post_id};`;
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
