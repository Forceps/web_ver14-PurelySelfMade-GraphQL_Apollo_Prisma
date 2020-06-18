import { PrismaClient } from "@prisma/client";
import { rootPostDir } from "../../../LibForGQL/findRootDir";
const prisma = new PrismaClient();

interface updateDirArgsTypes {
  directory_id: number;
  name: string;
  parent_id: number;
}
export default {
  Mutation: {
    updateDir: async (
      _: null,
      args: updateDirArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { directory_id, name, parent_id } = args;
      const { user } = request;
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
