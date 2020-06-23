import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface seeCommentsArgsTypes {
  post_id: number;
}
export default {
  Query: {
    seeComments: async (_: null, args: seeCommentsArgsTypes) => {
      const { post_id } = args;
      try {
        return prisma.comment.findMany({
          where: { post: post_id },
          include: { user_commentTouser: true },
          orderBy: { comment_id: "desc" },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
