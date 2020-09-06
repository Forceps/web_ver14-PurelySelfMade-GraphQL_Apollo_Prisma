import { PrismaClient } from "@prisma/client";
import { SearchUserQueryArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    searchUser: async (_: void, args: SearchUserQueryArgs) => {
      const { keyWord } = args;
      try {
        if (keyWord.length === 0) {
          return [];
        } else if (keyWord.length === 1) {
          const oneWordUser = await prisma.user.findMany({
            where: {
              username: keyWord,
            },
          });
          return oneWordUser;
        } else {
          let I_found = await prisma.$queryRaw`
            SELECT user_id, username,
            MATCH (username)
            AGAINST(${keyWord}) 
            AS Score FROM user
            WHERE MATCH (username)
            AGAINST(${keyWord})
            ORDER BY score DESC
            LIMIT 10;
          `;

          const exact = await I_found.findIndex(
            (u: any) => u.username === keyWord
          );
          if (I_found.length === 0) {
            I_found = await prisma.user.findMany({
              where: {
                username: {
                  contains: keyWord,
                },
              },
              select: {
                user_id: true,
              },
              take: 10,
            });
          } else {
            if (exact === -1) {
              const exactMany = await prisma.user.findMany({
                where: {
                  username: keyWord,
                },
                select: {
                  user_id: true,
                },
              });
              I_found = [...exactMany, ...I_found];
            }
          }

          let ResultBarrel: any[] = [];
          for (let i = 0; i < I_found.length; i++) {
            let item = await prisma.user.findOne({
              where: { user_id: I_found[i].user_id },
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
