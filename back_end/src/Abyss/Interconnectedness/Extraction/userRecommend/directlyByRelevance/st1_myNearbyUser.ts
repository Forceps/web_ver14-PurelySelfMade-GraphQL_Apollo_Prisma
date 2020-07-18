import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (user_id: number) => {
  const preFind = await prisma.user_relevance.findMany({
    where: {
      OR: [
        {
          user1: user_id,
          user_userTouser_relevance_user2: {
            creator: 1,
          },
          NOT: {
            user_userTouser_relevance_user2: {
              OR: [
                {
                  subscriber_subscriber_authorTouser: {
                    some: {
                      reader: user_id,
                    },
                  },
                },
                {
                  friend_friend_proposerTouser: {
                    some: {
                      OR: [
                        {
                          proposer: user_id,
                          respondent: user_id,
                        },
                      ],
                    },
                  },
                },
                {
                  friend_friend_respondentTouser: {
                    some: {
                      OR: [
                        {
                          proposer: user_id,
                          respondent: user_id,
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
        {
          user2: user_id,
          user_userTouser_relevance_user1: {
            creator: 1,
          },
          NOT: {
            user_userTouser_relevance_user1: {
              OR: [
                {
                  subscriber_subscriber_authorTouser: {
                    some: {
                      reader: user_id,
                    },
                  },
                },
                {
                  friend_friend_proposerTouser: {
                    some: {
                      OR: [
                        {
                          proposer: user_id,
                          respondent: user_id,
                        },
                      ],
                    },
                  },
                },
                {
                  friend_friend_respondentTouser: {
                    some: {
                      OR: [
                        {
                          proposer: user_id,
                          respondent: user_id,
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    },
    select: {
      user1: true,
      user2: true,
      degree: true,
    },
    orderBy: {
      degree: "desc",
    },
    take: 15,
  });

  return preFind;
};
