import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface groupsDirArgsTypes {
  directory_id: number;
}
export default {
  Query: {
    groupsDir: async (_: null, args: groupsDirArgsTypes) => {
      const { directory_id } = args;
      try {
        return prisma.directory.findOne({
          where: { directory_id },
          include: { directory: true, other_directory: true, post: true },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
