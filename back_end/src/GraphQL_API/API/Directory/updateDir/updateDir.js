import { PrismaClient } from "@prisma/client";
import { rootPostDir } from "../../../LibForGQL/findRootDir";
const prisma = new PrismaClient();

export default {
  Mutation: {
    updateDir: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { directory_id, name, parent_id } = args;
      const { user } = request;
      let Belong = null;
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
              parent_id: {
                connect: { directory_id: Belong },
              },
            },
            where: { directory_id },
          });
        }
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
