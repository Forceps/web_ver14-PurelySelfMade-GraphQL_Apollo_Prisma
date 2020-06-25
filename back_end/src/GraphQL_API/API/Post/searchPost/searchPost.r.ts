import { PrismaClient } from "@prisma/client";
import { SearchPostQueryArgs } from "../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    searchPost: async (_: void, args: SearchPostQueryArgs) => {
      const { keyWord } = args;
      try {
        const I_found = await prisma.queryRaw`
        SELECT post_id ,
        MATCH (caption, content)
        AGAINST(${keyWord}) 
        AS Score FROM post
        WHERE MATCH (caption, content)
        AGAINST(${keyWord})
        ORDER BY score DESC
        LIMIT 10;`;

        let ResultBarrel: any[] = [];
        for (let i = 0; i < I_found.length; i++) {
          let item = await prisma.post.findOne({
            where: { post_id: I_found[i].post_id },
            include: { user_postTouser: true, directory_directoryTopost: true },
          });
          ResultBarrel = ResultBarrel.concat(item);
        }
        return ResultBarrel;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
