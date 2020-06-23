import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { rootPostDir } from "../../../LibForGQL/findByPrisma/findRootDir";
import when_is_it_now from "../../../../GlobalLib/RecycleFunction/when_is_it_now";
import { CreatePostMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";

export default {
  Mutation: {
    createPost: async (
      _: void,
      args: CreatePostMutationArgs,
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
