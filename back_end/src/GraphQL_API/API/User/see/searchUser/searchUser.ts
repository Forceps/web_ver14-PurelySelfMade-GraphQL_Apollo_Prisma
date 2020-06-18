import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface searchUserArgsTypes {
  keyWord: string;
}
export default {
  Query: {
    searchUser: async (_: null, args: searchUserArgsTypes) => {
      const { keyWord } = args;
      try {
        const I_found = await prisma.raw`
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
        return ResultBarrel;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
