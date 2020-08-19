import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    postsByDirId: async (
      _: void,
      { author_id, directory_id }: { author_id: number; directory_id: number }
    ) => {
      try {
        let p_by_dir_id: any[] = [];
        if (directory_id === 0) {
          p_by_dir_id = await prisma.post.findMany({
            where: {
              user: author_id,
            },
            include: {
              user_postTouser: true,
            },
          });
        } else {
          p_by_dir_id = await prisma.post.findMany({
            where: {
              directory: directory_id,
            },
            include: {
              user_postTouser: true,
            },
          });
        }
        return p_by_dir_id;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
