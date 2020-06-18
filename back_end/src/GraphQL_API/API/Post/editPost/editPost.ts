import { PrismaClient } from "@prisma/client";
import { rootPostDir } from "../../../LibForGQL/findRootDir";
const prisma = new PrismaClient();

interface editPostArgsTypes {
  post_id: number;
  caption: string;
  content: string;
  directory_id: number;
}
export default {
  Mutation: {
    editPost: async (
      _: null,
      args: editPostArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { post_id, caption, content, directory_id } = args;
      const { user } = request;
      let directory: any = null;
      try {
        if (directory_id === 0) {
          directory = await rootPostDir(user.user_id);
        } else {
          directory = directory_id;
        }
      } catch (e) {
        console.log(e);
      }

      try {
        await prisma.post.update({
          data: {
            caption,
            content,
            directory_directoryTopost: {
              connect: { directory_id: directory },
            },
          },
          where: { post_id },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
