import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    makeDir: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { name, parent_id } = args;
      try {
        await prisma.directory.create({
          data: {
            name,
            parent_id: {
              connect: { directory_id: parent_id }
            },
            user: {
              connect: { user_id: user.user_id }
            },
            root: false
          }
        });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    }
  }
};
