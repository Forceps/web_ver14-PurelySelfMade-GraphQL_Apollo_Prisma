import { PrismaClient } from "@prisma/client";
import { MakeDirMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    makeDir: async (
      _: void,
      args: MakeDirMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { name, parent_id } = args;
      try {
        await prisma.directory.create({
          data: {
            name,
            directory: {
              connect: { directory_id: parent_id },
            },
            user_directoryTouser: {
              connect: { user_id: user.user_id },
            },
            root: false,
          },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
