import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    addFreind: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { respondent } = args;
      try {
        const already_exists = await prisma.friends.findMany({
          where: {
            proposer: { user_id: user.user_id },
            respondent: { user_id: respondent },
          },
        });
        if (already_exists.length === 0) {
          await prisma.friends.create({
            data: {
              proposer: {
                connect: { user_id: user.user_id },
              },
              respondent: {
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
