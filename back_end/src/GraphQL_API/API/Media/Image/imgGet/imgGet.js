import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    imgGet: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { skip, first } = args;
      try {
        if ((skip || skip === 0) && (first || first === 0)) {
          return prisma.image.findMany({
            where: {
              directory: { user: { user_id: user.user_id } },
            },
            orderBy: {
              image_id: "desc",
            },
            skip,
            first,
          });
        } else if (skip) {
          return prisma.image.findMany({
            where: {
              directory: { user: { user_id: user.user_id } },
            },
            orderBy: {
              image_id: "desc",
            },
            first: skip,
          });
        } else {
          return prisma.image.findMany({
            where: {
              directory: { user: { user_id: user.user_id } },
            },
            orderBy: {
              image_id: "desc",
            },
            first: 4,
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
}; // skip은 n개를 생략하고 first는 m개를 보여준다.
