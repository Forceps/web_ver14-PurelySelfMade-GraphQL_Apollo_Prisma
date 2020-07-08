import { PrismaClient } from "@prisma/client";
import { rootPostDir } from "../../../../LibForGQL/findByPrisma/findRootDir";
import { UpdateDirMutationArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    updateDir: async (
      _: void,
      args: UpdateDirMutationArgs,
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
      const { directory_id, name, parent_id } = args;
      const { user } = req;
      let Belong: any = null;
      let contradictory_situation = false;
      try {
        if (parent_id === 0) {
          Belong = rootPostDir(user.user_id);
        } else if (directory_id === parent_id) {
          contradictory_situation = true;
        } else {
          Belong = parent_id;
        }
      } catch (e) {
        console.log(e);
        return false;
      }

      try {
        if (contradictory_situation) {
          await prisma.directory.update({
            data: { name },
            where: { directory_id },
          });
        } else {
          await prisma.directory.update({
            data: {
              name,
              directory: {
                connect: { directory_id: Belong },
              },
            },
            where: { directory_id },
          });
        }
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
