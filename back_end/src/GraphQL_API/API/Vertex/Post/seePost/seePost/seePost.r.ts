import { PrismaClient } from "@prisma/client";
import { SeePostQueryArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
import { watchingLoging } from "../../../../../../Abyss/Interconnectedness/Injection/watched";
import { S_N_to_N } from "../../../../../../GlobalLib/recycleFunction/type_convert";
import { contextType } from "../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    seePost: async (
      _: void,
      { post_id }: SeePostQueryArgs,
      { req, isAuthenticated }: contextType
    ) => {
      try {
        const expandData = prisma.post.findOne({
          where: { post_id },
          include: { directory_directoryTopost: true, user_postTouser: true },
        });

        prisma.$executeRaw`UPDATE square_post.post SET views = views + 1 WHERE post_id = ${post_id}`;
        if (req && req?.user && req?.user?.user_id) {
          isAuthenticated(req);
          watchingLoging(S_N_to_N(req.user.user_id), post_id);
        }

        return expandData;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
