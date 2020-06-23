import { PrismaClient } from "@prisma/client";
import when_is_it_now from "../../../../GlobalLib/when_is_it_now";
import { AddCommentMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    addComment: async (
      _: void,
      args: AddCommentMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { post_id, comment } = args;
      const { year, month, day, hour, minute } = when_is_it_now();

      try {
        await prisma.comment.create({
          data: {
            post_commentTopost: { connect: { post_id } },
            user_commentTouser: { connect: { user_id: user.user_id } },
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
