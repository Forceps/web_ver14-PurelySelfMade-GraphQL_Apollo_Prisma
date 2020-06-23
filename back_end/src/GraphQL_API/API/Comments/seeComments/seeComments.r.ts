import { PrismaClient } from "@prisma/client";
import { SeeCommentsQueryArgs } from "../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    seeComments: async (_: void, args: SeeCommentsQueryArgs) => {
      const { post_id } = args;
      try {
        return prisma.comment.findMany({
          where: { post: post_id },
          include: { user_commentTouser: true },
          orderBy: { comment_id: "desc" },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
