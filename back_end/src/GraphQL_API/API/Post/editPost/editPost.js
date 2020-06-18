import { PrismaClient } from "@prisma/client";
import { rootPostDir } from "../../../LibForGQL/findRootDir";
const prisma = new PrismaClient();

export default {
  Mutation: {
    editPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { post_id, caption, content, directory_id } = args;
      const { user } = request;
      let directory = null;
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
            directory: {
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
