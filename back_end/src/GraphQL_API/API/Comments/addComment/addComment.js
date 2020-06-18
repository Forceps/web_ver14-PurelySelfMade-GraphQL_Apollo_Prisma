import { PrismaClient } from "@prisma/client";
import when_is_it_now from "../../../../GlobalLib/when_is_it_now";
const prisma = new PrismaClient();

export default {
  Mutation: {
    addComment: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { post_id, comment } = args;
      const { year, month, day, hour, minute } = when_is_it_now();

      try {
        await prisma.comment.create({
          data: {
            post: { connect: { post_id } },
            user: { connect: { user_id: user.user_id } },
            comment,
            year,
            month,
            day,
            hour,
            minute,
          },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
