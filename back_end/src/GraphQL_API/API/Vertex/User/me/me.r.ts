import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    me: (_: void, __: void, { req, isAuthenticated }: contextType) => {
      isAuthenticated(req);
      const { user } = req;
      try {
        return prisma.user.findOne({ where: { user_id: user.user_id } });
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
