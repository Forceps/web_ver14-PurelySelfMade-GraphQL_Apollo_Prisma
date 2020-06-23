import { PrismaClient } from "@prisma/client";
import { SeeFriendsQueryArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    seeFriends: async (
      _: void,
      args: SeeFriendsQueryArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { proposer } = args;
      try {
        let Rvalue;
        if (proposer) {
          Rvalue = await prisma.friend.findMany({
            where: {
              proposer,
            },
            include: { user_friend_respondentTouser: true },
          });
        } else {
          Rvalue = await prisma.friend.findMany({
            where: {
              proposer: user.user_id,
            },
            include: { user_friend_respondentTouser: true },
          });
        }
        let refinedRvalue: any[] = [];
        for (let i = 0; i < Rvalue.length; i++) {
          let { respondent: UserInfo } = Rvalue[i];
          refinedRvalue = refinedRvalue.concat(UserInfo);
        }
        return refinedRvalue;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
