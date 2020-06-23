import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// import PythonPlay from "../../../GlobalLib/PythonPlay";

interface seePostArgsTypes {
  post_id: number;
}
export default {
  Query: {
    seePost: async (_: null, args: seePostArgsTypes) => {
      const { post_id } = args;
      // PythonPlay(
      //   `D:\\프로그래밍 자료\\Desktop Application Developing\\desk_ver1 (PyQT)\\hello.py`,
      //   "hello.py"
      // );
      try {
        await prisma.executeRaw`UPDATE square_post.post SET views = views + 1 WHERE post_id = ${post_id}`;
        return prisma.post.findOne({
          where: { post_id },
          include: { directory_directoryTopost: true, user_postTouser: true },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
