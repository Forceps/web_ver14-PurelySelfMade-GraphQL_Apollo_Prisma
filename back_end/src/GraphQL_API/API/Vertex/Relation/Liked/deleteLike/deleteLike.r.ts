import { PrismaClient } from "@prisma/client";
import { DeleteLikeMutationArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
import { contextType } from "../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Mutation: {
    deleteLike: async (
      _: void,
      args: DeleteLikeMutationArgs,
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
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
