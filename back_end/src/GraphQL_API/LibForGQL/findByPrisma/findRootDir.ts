import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const rootPostDir = async (user_id: number) => {
  try {
    const TempDirectory = await prisma.directory.findMany({
      where: {
        root: true,
        name: "My Post",
        user_directoryTouser: { user_id },
      },
    });
    return TempDirectory[0].directory_id;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const rootArchiveDir = async (user_id: number) => {
  try {
    const TempDirectory = await prisma.directory.findMany({
      where: {
        root: true,
        name: "My Archive",
        user_directoryTouser: { user_id },
      },
    });
    return TempDirectory[0].directory_id;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
