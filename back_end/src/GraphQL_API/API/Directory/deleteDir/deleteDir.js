import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    deleteDir: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { directory_id } = args;
      try {
        await prisma.raw`DELETE FROM square_post.directory WHERE directory_id = ${directory_id};`;
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
