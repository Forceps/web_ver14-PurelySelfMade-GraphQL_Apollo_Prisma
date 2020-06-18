import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    groupRootDir: async (_, args) => {
      const { groups_id } = args;
      try {
        const ret = await prisma.directory.findMany({
          where: {
            root: true,
            group: { groups_id },
          },
          include: { directory: true, post: true },
        });
        return ret[0];
      } catch (e) {
        console.log(e);
      }
    },
  },
};
