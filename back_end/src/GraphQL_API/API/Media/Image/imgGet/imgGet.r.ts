import { PrismaClient } from "@prisma/client";
import { ImgGetQueryArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    imgGet: async (
      _: void,
      args: ImgGetQueryArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { skip, take } = args;
      try {
        if ((skip || skip === 0) && (take || take === 0)) {
          return prisma.image.findMany({
            where: {
              directory_directoryToimage: {
                user: user.user_id,
              },
            },
            orderBy: {
              image_id: "desc",
            },
            skip,
            take,
          });
        } else if (skip) {
          return prisma.image.findMany({
            where: {
              directory_directoryToimage: {
                user: user.user_id,
              },
            },
            orderBy: {
              image_id: "desc",
            },
            take: skip,
          });
        } else {
          return prisma.image.findMany({
            where: {
              directory_directoryToimage: {
                user: user.user_id,
              },
            },
            orderBy: {
              image_id: "desc",
            },
            take: 4,
          });
        }
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
