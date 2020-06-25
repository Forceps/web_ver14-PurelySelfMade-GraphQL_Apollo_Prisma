import { PrismaClient } from "@prisma/client";
import { SearchUserQueryArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    searchUser: async (_: void, args: SearchUserQueryArgs) => {
      const { keyWord } = args;
      try {
        const I_found = await prisma.queryRaw`
        SELECT user_id ,
        MATCH (username)
        AGAINST(${keyWord}) 
        AS Score FROM user
        WHERE MATCH (username)
        AGAINST(${keyWord})
        ORDER BY score DESC
        LIMIT 10;`;

        let ResultBarrel: any[] = [];
        for (let i = 0; i < I_found.length; i++) {
          let item = await prisma.user.findOne({
            where: { user_id: I_found[i].user_id },
          });
          ResultBarrel = ResultBarrel.concat(item);
        }
        return {
          ok: true,
          error: null,
          data: ResultBarrel,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: e.message,
          data: null,
        };
      }
    },
  },
};
