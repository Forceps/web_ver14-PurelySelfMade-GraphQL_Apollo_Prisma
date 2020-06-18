import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface findDirByIdArgsTypes {
  directory_id: number;
}
export default {
  Query: {
    findDirById: async (_: null, args: findDirByIdArgsTypes) => {
      const { directory_id } = args;
      try {
        return prisma.directory.findOne({
          where: { directory_id },
          include: {
            directory: true,
            other_directory: {
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
