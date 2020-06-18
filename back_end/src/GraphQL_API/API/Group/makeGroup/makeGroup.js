import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    makeGroup: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const {
        name,
        purpose,
        participation_system,
        withdrawal_system,
        identiti_back_img,
        identiti_profile_img,
      } = args;
      try {
        await prisma.group.create({
          data: {
            name,
            purpose,
            administrator: {
              connect: { user_id: user.user_id },
            },
            participation_system,
            withdrawal_system,
            identiti_back_img,
            identiti_profile_img,
          },
        });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
