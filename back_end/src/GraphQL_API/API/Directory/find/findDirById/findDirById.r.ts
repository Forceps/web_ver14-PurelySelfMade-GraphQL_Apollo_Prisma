import { PrismaClient } from "@prisma/client";
import { FindDirByIdQueryArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    findDirById: async (_: void, args: FindDirByIdQueryArgs) => {
      const { directory_id } = args;
      try {
        const data = await prisma.directory.findOne({
          where: { directory_id },
          include: {
            directory: true,
            other_directory: {
              include: {
                directory: true,
              },
            },
            post: true,
          },
        });
        return {
          ok: false,
          error: null,
          data,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: e.message,
          data: null,
        };
      }
    },
  },
};
