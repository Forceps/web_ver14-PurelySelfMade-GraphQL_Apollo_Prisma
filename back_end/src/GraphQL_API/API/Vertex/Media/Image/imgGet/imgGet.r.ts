import { PrismaClient } from "@prisma/client";
import { ImgGetQueryArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    imgGet: async (
      _: void,
      { skip, take }: ImgGetQueryArgs,
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
      const { user } = req;
      try {
        return prisma.image.findMany({
          where: {
            directory_directoryToimage: {
              user: user.user_id,
            },
          },
          orderBy: {
            image_id: "desc",
          },
          skip: skip ? skip : 0,
          take: take ? take : 4,
        });
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
