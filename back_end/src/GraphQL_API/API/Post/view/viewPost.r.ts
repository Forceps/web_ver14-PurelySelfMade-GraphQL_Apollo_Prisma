import { PrismaClient } from "@prisma/client";
import { ViewPostMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    viewPost: async (_: void, args: ViewPostMutationArgs) => {
      const { post_id } = args;

      try {
        await prisma.executeRaw`UPDATE square_post.post SET views = views + 1 WHERE post_id = ${post_id}`;

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
