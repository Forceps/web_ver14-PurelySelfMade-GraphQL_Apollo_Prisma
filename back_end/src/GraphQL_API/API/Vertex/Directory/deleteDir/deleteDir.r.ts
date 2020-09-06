import { PrismaClient } from "@prisma/client";
import { DeleteDirMutationArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
import { contextType } from "../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Mutation: {
    deleteDir: async (
      _: void,
      args: DeleteDirMutationArgs,
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      const { directory_id } = args;
      try {
        await prisma.$queryRaw`DELETE FROM square_post.directory WHERE directory_id = ${directory_id};`;
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
