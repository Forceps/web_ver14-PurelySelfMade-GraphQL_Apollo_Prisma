import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    postsByDirId: async (
      _: void,
      { directory_id }: { directory_id: number }
    ) => {
      try {
        const p_by_dir_id = prisma.post.findMany({});
        return p_by_dir_id;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
