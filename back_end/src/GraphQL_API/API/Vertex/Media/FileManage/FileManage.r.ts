import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Query: {
    FileManage: async (_: void, __: void, { req, isAuthenticated }: any) => {
      isAuthenticated(req);
      const { user } = req;
      try {
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
