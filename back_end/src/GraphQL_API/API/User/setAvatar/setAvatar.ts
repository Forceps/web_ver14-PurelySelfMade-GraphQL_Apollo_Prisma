import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface setAvatarArgsTypes {
  avatar: string;
}
export default {
  Mutation: {
    setAvatar: async (
      _: null,
      args: setAvatarArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { avatar } = args;
      const { user } = request;

      try {
        await prisma.user.update({
          data: {
            avatar,
          },
          where: { user_id: user.user_id },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
