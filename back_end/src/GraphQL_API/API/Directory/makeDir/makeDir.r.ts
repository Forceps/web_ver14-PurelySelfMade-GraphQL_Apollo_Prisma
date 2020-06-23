import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface makeDirArgsTypes {
  parent_id: number;
  name: string;
}
export default {
  Mutation: {
    makeDir: async (
      _: null,
      args: makeDirArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { name, parent_id } = args;
      try {
        await prisma.directory.create({
          data: {
            name,
            directory: {
              connect: { directory_id: parent_id },
            },
            user_directoryTouser: {
              connect: { user_id: user.user_id },
            },
            root: false,
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
