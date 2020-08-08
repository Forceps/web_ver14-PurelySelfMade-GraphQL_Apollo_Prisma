import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../LibForGQL/typesLib";

const prisma = new PrismaClient();

export default {
  Query: {
    postMetaInfo: async (
      _: void,
      __: void,
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      const { user } = req;
      try {
        const postCount = await prisma.post.count({
          where: {
            user: user.user_id,
          },
        });
        return { postCount };
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
