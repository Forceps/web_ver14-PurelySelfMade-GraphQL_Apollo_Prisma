import { PrismaClient } from "@prisma/client";
import { SearchPostQueryArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    searchPost: async (_: void, args: SearchPostQueryArgs) => {
      const { keyWord } = args;
      try {
        if (keyWord.length === 0) {
          return [];
        } else if (keyWord.length === 1) {
          const oneWordCaption = await prisma.post.findMany({
            where: {
              caption: keyWord,
            },
          });
          return oneWordCaption;
        } else {
          let ResultBarrel: any[] = [];
          let I_found = await prisma.$queryRaw`
            SELECT post_id, caption,
            MATCH (caption, content)
            AGAINST(${keyWord}) 
            AS Score FROM post
            WHERE MATCH (caption, content)
            AGAINST(${keyWord})
            ORDER BY score DESC
            LIMIT 10;`;

          let exact = await I_found.findIndex(
            (u: any) => u.caption === keyWord
          );
          if (I_found.length === 0) {
            I_found = await prisma.post.findMany({
              where: {
                caption: {
                  contains: keyWord,
                },
              },
              select: {
                post_id: true,
              },
              take: 10,
            });
          } else {
            if (exact === -1) {
              const exactMany = await prisma.post.findMany({
                where: {
                  caption: keyWord,
                },
                select: {
                  post_id: true,
                },
              });
              I_found = [...exactMany, ...I_found];
            }
          }
          for (let i = 0; i < I_found.length; i++) {
            let item = await prisma.post.findOne({
              where: { post_id: I_found[i].post_id },
              include: {
                user_postTouser: true,
                directory_directoryTopost: true,
              },
            });
            ResultBarrel = ResultBarrel.concat(item);
          }
          return ResultBarrel;
        }
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
