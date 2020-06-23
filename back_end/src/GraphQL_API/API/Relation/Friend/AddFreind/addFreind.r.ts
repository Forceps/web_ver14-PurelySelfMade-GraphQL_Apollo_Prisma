import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface addFreindArgsTypes {
  respondent: number;
}
export default {
  Mutation: {
    addFreind: async (
      _: null,
      args: addFreindArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
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
