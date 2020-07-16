import { PrismaClient } from "@prisma/client";
import { rootPostDir } from "../../../../LibForGQL/findByPrisma/findRootDir";
const prisma = new PrismaClient();

export default {
  Mutation: {
    editPost: async (_: void, args, { req, isAuthenticated }: any) => {
      isAuthenticated(req);
      const { post_id, caption, content, directory_id, face, face_type } = args;
      let face_type_t: "image" | "text" = "text";
      if (face_type === "image") {
        face_type_t = "image";
      }
      const { user } = req;
      let directory: any = null;
      try {
        directory_id === 0
          ? (directory = await rootPostDir(user.user_id))
          : (directory = directory_id);
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
            face: face ? face : "",
            face_type: face_type_t,
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
