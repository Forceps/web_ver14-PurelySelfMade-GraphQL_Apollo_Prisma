import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Subscription: {
    createRoom: {
      subscribe: (_: void, __: void, { pubSub }) => {
        return pubSub.asyncIterator("chatSting");
      },
    },
  },
};
