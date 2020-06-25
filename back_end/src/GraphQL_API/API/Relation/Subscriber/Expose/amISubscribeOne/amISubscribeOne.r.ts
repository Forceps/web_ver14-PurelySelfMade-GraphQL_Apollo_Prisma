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
        const data = await prisma.subscriber.findMany({
          where: {
            author,
            reader: user.user_id,
          },
        });
        return {
          ok: true,
          error: null,
          data,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: e.message,
          data: null,
        };
      }
    },
  },
};
