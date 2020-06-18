import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface groupRootDirArgsTypes {
  group_id: number;
}
export default {
  Query: {
    groupRootDir: async (_: null, args: groupRootDirArgsTypes) => {
      const { group_id } = args;
      try {
        const ret = await prisma.directory.findMany({
          where: {
            root: true,
            group: group_id,
          },
          include: { other_directory: true, post: true },
        });
        return ret[0];
      } catch (e) {
        console.log(e);
      }
    },
  },
};
