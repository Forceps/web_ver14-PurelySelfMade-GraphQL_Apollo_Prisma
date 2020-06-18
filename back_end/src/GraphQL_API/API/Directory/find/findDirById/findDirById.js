import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    findDirById: async (_, args) => {
      const { directory_id } = args;
      try {
        return prisma.directory.findOne({
          where: { directory_id },
          include: {
            parent_id: true,
            directory: {
              include: {
                directory: true,
              },
            },
            post: true,
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
