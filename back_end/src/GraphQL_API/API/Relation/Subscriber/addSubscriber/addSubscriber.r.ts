import { PrismaClient } from "@prisma/client";
import { AddSubscriberMutationArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    addSubscriber: async (
      _: void,
      args: AddSubscriberMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { author } = args;
      try {
        const already_exists = await prisma.subscriber.findMany({
          where: {
            author,
            reader: user.user_id,
          },
        });
        if (already_exists.length === 0) {
          await prisma.subscriber.create({
            data: {
              user_subscriber_authorTouser: {
                connect: { user_id: author },
              },
              user_subscriber_readerTouser: {
                connect: { user_id: user.user_id },
              },
            },
          });
        }
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
