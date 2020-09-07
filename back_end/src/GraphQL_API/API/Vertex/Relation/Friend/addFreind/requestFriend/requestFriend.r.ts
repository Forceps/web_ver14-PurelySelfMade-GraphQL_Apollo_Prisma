import { PrismaClient } from "@prisma/client";
import { AddFreindMutationArgs } from "../../../../../../LibForGQL/mergedSchema/types/graph";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Mutation: {
    requestFriend: async (
      _: void,
      args: AddFreindMutationArgs,
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      const { user } = req;
      const { respondent } = args;
      try {
        const already_exists = await prisma.friend.findMany({
          where: {
            proposer: user.user_id,
            respondent: respondent,
          },
        });
        if (already_exists.length === 0) {
          await prisma.friend.create({
            data: {
              user_friend_proposerTouser: {
                connect: { user_id: user.user_id },
              },
              user_friend_respondentTouser: {
                connect: { user_id: respondent },
              },
            },
          });
        }
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
