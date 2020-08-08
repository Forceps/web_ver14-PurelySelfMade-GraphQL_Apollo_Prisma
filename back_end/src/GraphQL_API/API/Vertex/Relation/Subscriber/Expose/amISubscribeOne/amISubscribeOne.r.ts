import { PrismaClient } from "@prisma/client";
import { AmISubscribeOneQueryArgs } from "../../../../../../LibForGQL/mergedSchema/types/graph";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    amISubscribeOne: async (
      _: void,
      args: AmISubscribeOneQueryArgs,
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      const { user } = req;
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
