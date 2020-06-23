import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface musicGetArgsTypes {
  skip: number;
  take: number;
}
export default {
  Query: {
    musicGet: async (
      _: null,
      args: musicGetArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { skip, take } = args;
      try {
        if ((skip || skip === 0) && (take || take === 0)) {
          return prisma.music.findMany({
            where: {
              directory_directoryTomusic: {
                user: user.user_id,
              },
            },
            orderBy: {
              music_id: "desc",
            },
            skip,
            take,
          });
        } else if (skip) {
          return prisma.music.findMany({
            where: {
              directory_directoryTomusic: {
                user: user.user_id,
              },
            },
            orderBy: {
              music_id: "desc",
            },
            take: skip,
          });
        } else {
          return prisma.music.findMany({
            where: {
              directory_directoryTomusic: {
                user: user.user_id,
              },
            },
            orderBy: {
              music_id: "desc",
            },
            take: 4,
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
}; // skip은 n개를 생략하고 first는 m개를 보여준다.
