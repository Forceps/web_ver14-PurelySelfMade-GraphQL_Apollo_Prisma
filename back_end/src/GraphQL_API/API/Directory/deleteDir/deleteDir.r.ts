import { PrismaClient } from "@prisma/client";
import { DeleteDirMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    deleteDir: async (
      _: void,
      args: DeleteDirMutationArgs,
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
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
