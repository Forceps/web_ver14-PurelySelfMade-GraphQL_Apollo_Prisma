import { PrismaClient } from "@prisma/client";
import { SeePostQueryArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
import { watchingLoging } from "../../../../../../Abyss/Interconnectedness/Injection/watched";
import { S_N_to_N } from "../../../../../../GlobalLib/recycleFunction/type_convert";
import { contextType } from "../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();
// import PythonPlay from "../../../GlobalLib/PythonPlay";

export default {
  Query: {
    seePost: async (
      _: void,
      args: SeePostQueryArgs,
      { req, isAuthenticated }: contextType
    ) => {
      const { post_id } = args;
      // PythonPlay(
      //   `D:\\프로그래밍 자료\\Desktop Application Developing\\desk_ver1 (PyQT)\\hello.py`,
      //   "hello.py"
      // );
      try {
        prisma.$executeRaw`UPDATE square_post.post SET views = views + 1 WHERE post_id = ${post_id}`;
        if (req && req?.user && req?.user?.user_id) {
          isAuthenticated(req);
          watchingLoging(S_N_to_N(req.user.user_id), post_id);
        }
        return prisma.post.findOne({
          where: { post_id },
          include: { directory_directoryTopost: true, user_postTouser: true },
        });
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
