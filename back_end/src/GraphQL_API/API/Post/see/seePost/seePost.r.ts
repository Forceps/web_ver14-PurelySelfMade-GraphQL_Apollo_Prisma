import { PrismaClient } from "@prisma/client";
import { SeePostQueryArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();
// import PythonPlay from "../../../GlobalLib/PythonPlay";

export default {
  Query: {
    seePost: async (_: void, args: SeePostQueryArgs) => {
      const { post_id } = args;
      // PythonPlay(
      //   `D:\\프로그래밍 자료\\Desktop Application Developing\\desk_ver1 (PyQT)\\hello.py`,
      //   "hello.py"
      // );
      try {
        await prisma.executeRaw`UPDATE square_post.post SET views = views + 1 WHERE post_id = ${post_id}`;
        const data = await prisma.post.findOne({
          where: { post_id },
          include: { directory_directoryTopost: true, user_postTouser: true },
        });
        return {
          ok: true,
          error: null,
          data,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: e.message,
          data: null,
        };
      }
    },
  },
};
