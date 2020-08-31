import { PrismaClient } from "@prisma/client";
import { SeeWhosePostsQueryArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    seeWhosePosts: async (_: void, args: SeeWhosePostsQueryArgs) => {
      const { user } = args;
      try {
        return prisma.post.findMany({
          where: { user },
          include: { user_postTouser: true, directory_directoryTopost: true },
          orderBy: { post_id: "desc" },
        });
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
