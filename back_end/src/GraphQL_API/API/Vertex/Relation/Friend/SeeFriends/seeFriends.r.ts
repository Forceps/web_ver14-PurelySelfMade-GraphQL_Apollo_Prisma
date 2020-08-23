import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    seeFriends: async (_: void, { user_id }: { user_id: number }) => {
      try {
        const Rvalue = await prisma.user.findMany({
          where: {
            OR: [
              {
                friend_friend_proposerTouser: {
                  some: {
                    proposer: user_id,
                    consent: true,
                  },
                },
              },
              {
                friend_friend_respondentTouser: {
                  some: {
                    respondent: user_id,
                    consent: true,
                  },
                },
              },
            ],
          },
        });
        return Rvalue;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
