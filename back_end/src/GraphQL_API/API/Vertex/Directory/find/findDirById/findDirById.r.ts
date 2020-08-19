import { PrismaClient } from "@prisma/client";
import { FindDirByIdQueryArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    findDirById: async (_: void, args: FindDirByIdQueryArgs) => {
      const { directory_id } = args;
      try {
        return prisma.directory.findOne({
          where: { directory_id },
          include: {
            directory: true,
            other_directory: {
              include: {
                other_directory: {
                  select: {
                    directory_id: true,
                  },
                },
              },
            },
            post: true,
          },
        });
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
