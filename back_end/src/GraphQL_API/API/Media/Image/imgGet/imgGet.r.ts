import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface imgGetArgsTypes {
  skip: number;
  take: number;
}
export default {
  Query: {
    imgGet: async (
      _: null,
      args: imgGetArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { skip, take } = args;
      try {
        if ((skip || skip === 0) && (take || take === 0)) {
          return prisma.image.findMany({
            where: {
              directory_directoryToimage: {
                user: user.user_id,
              },
            },
            orderBy: {
              image_id: "desc",
            },
            skip,
            take,
          });
        } else if (skip) {
          return prisma.image.findMany({
            where: {
              directory_directoryToimage: {
                user: user.user_id,
              },
            },
            orderBy: {
              image_id: "desc",
            },
            take: skip,
          });
        } else {
          return prisma.image.findMany({
            where: {
              directory_directoryToimage: {
                user: user.user_id,
              },
            },
            orderBy: {
              image_id: "desc",
            },
            take: 4,
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
}; // skip은 n개를 생략하고 take는 m개를 보여준다.
