import { PrismaClient } from "@prisma/client";
import { DeleteDirMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    deleteDir: async (
      _: void,
      args: DeleteDirMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { directory_id } = args;
      try {
        await prisma.queryRaw`DELETE FROM square_post.directory WHERE directory_id = ${directory_id};`;
        return {
          ok: true,
          error: null,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: e.message,
        };
      }
    },
  },
};
