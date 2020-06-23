import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { rootPostDir } from "../../../LibForGQL/findRootDir";
import when_is_it_now from "../../../../GlobalLib/when_is_it_now";

interface createPostArgsTypes {
  caption: string;
  content: string;
  directory_id: number;
}
export default {
  Mutation: {
    createPost: async (
      _: null,
      args: createPostArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { caption, content, directory_id } = args;
      const { year, month, day, hour, minute, second } = when_is_it_now();
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
        await prisma.post.create({
          data: {
            caption,
            content,
            user_postTouser: { connect: { user_id: user.user_id } },
            directory_directoryTopost: {
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
