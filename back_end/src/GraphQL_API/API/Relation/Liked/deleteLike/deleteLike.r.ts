import { PrismaClient } from "@prisma/client";
import { DeleteLikeMutationArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    deleteLike: async (
      _: void,
      args: DeleteLikeMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { liked_id } = args;
      try {
        await prisma.liked.delete({
          where: { liked_id },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
