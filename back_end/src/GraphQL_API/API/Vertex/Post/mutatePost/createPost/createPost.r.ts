import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { rootPostDir } from "../../../../../LibForGQL/findByPrisma/findRootDir";
import { CreatePostMutationArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
import when_is_it_now from "../../../../../../GlobalLib/recycleFunction/when_is_it_now";
import { contextType } from "../../../../../LibForGQL/typesLib";

export default {
  Mutation: {
    createPost: async (
      _: void,
      args: CreatePostMutationArgs,
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      const { user } = req;
      const { caption, content, directory_id, face, face_type } = args;
      let face_type_t: "image" | "text" = "text";
      if (face_type === "image") {
        face_type_t = "image";
      }
      const { year, month, day, hour, minute, second } = when_is_it_now();
      let directory: any = null;
      try {
        directory_id === 0
          ? (directory = await rootPostDir(user.user_id))
          : (directory = directory_id);
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
            face: face ? face : "",
            face_type: face_type_t,
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
