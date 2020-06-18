import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface searchPostArgsTypes {
  keyWord: string;
  user_id: number;
}
export default {
  Query: {
    searchPost: async (_: null, args: searchPostArgsTypes) => {
      const { keyWord, user_id } = args;
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
      }
    },
  },
};
