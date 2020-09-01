import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    imgGetByDirId: async (
      _: void,
      { author_id, directory_id, skip, take },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      const { user } = req;
      try {
        const img_by_dir_id = await prisma.image.findMany({
          where:
            directory_id === 0
              ? {
                  directory_directoryToimage: {
                    user: author_id === 0 ? user.user_id : author_id,
                  },
                }
              : {
                  directory: directory_id,
                },
          orderBy: {
            image_id: "desc",
          },
          skip: skip ? skip : 0,
          take: take ? take : 4,
        });
        return img_by_dir_id;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
