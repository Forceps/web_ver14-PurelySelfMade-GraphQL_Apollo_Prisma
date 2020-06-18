import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { rootPostDir } from "../../../LibForGQL/findRootDir";
import when_is_it_now from "../../../../GlobalLib/when_is_it_now";

export default {
  Mutation: {
    createPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { caption, content, directory_id } = args;
      const { year, month, day, hour, minute, second } = when_is_it_now();
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
        await prisma.post.create({
          data: {
            caption,
            content,
            user: { connect: { user_id: user.user_id } },
            directory: {
              connect: { directory_id: directory },
            },
            year,
            month,
            day,
            hour,
            minute,
            second,
          },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
