import { PrismaClient } from "@prisma/client";
import { AmISubscribeOneQueryArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    amISubscribeOne: async (
      _: void,
      args: AmISubscribeOneQueryArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { author } = args;
      try {
        return prisma.subscriber.findMany({
          where: {
            author,
            reader: user.user_id,
          },
        });
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
