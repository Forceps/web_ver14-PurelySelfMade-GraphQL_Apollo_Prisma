import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface whosePostDirArgsTypes {
  user_id: number;
}
export default {
  Query: {
    whosePostDir: async (_: null, args: whosePostDirArgsTypes) => {
      const { user_id } = args;
      try {
        const ret = await prisma.directory.findMany({
          where: {
            root: true,
            name: "My Post",
            user: user_id,
          },
          include: {
            other_directory: {
              include: {
                other_directory: true,
              },
            },
            post: true,
          },
        });
        return ret[0];
      } catch (e) {
        console.log(e);
      }
    },
  },
};
