import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface deleteDirArgsTypes {
  directory_id: number;
}
export default {
  Mutation: {
    deleteDir: async (
      _: null,
      args: deleteDirArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { directory_id } = args;
      try {
        await prisma.queryRaw`DELETE FROM square_post.directory WHERE directory_id = ${directory_id};`;
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
