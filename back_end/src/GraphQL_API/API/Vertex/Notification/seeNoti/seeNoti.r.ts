import { PrismaClient } from "@prisma/client";
import { S_N_to_N } from "../../../../../GlobalLib/recycleFunction/type_convert";
const prisma = new PrismaClient();

export default {
  Query: {
    seeNoti: async (_: void, { skip, take }, { req, isAuthenticated }: any) => {
      try {
        isAuthenticated(req);
        const user = S_N_to_N(req.user.user_id);
        const result = await prisma.notification.findMany({
          where: {
            user,
          },
          orderBy: { notification_id: "desc" },
          skip: skip ? skip : 0,
          take: take ? take : 9,
        });
        return result.reverse();
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
