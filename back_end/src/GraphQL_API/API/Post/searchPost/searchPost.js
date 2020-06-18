import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    searchPost: async (_, args) => {
      const { keyWord, user_id } = args;
      try {
        const I_found = await prisma.raw`
        SELECT post_id ,
        MATCH (caption, content)
        AGAINST(${keyWord}) 
        AS Score FROM post
        WHERE MATCH (caption, content)
        AGAINST(${keyWord})
        ORDER BY score DESC
        LIMIT 10;`;

        let ResultBarrel = [];
        for (let i = 0; i < I_found.length; i++) {
          let item = await prisma.post.findOne({
            where: { post_id: I_found[i].post_id },
            include: { user: true, directory: true },
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
