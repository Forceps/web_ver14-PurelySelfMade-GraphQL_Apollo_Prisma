import { PrismaClient } from "@prisma/client";
import { DeletePostMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    deletePost: async (
      _: void,
      args: DeletePostMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { post_id } = args;
      try {
        await prisma.executeRaw`DELETE FROM square_post.post WHERE post_id = ${post_id};`;
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
