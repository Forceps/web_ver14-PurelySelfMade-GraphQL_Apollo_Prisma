import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const rootPostDir = async (user_id) => {
  try {
    const TempDirectory = await prisma.directory.findMany({
      where: {
        root: true,
        name: "My Post",
        user: { user_id },
      },
    });
    return TempDirectory[0].directory_id;
  } catch (e) {
    console.log(e);
  }
};

export const rootArchiveDir = async (user_id) => {
  try {
    const TempDirectory = await prisma.directory.findMany({
      where: {
        root: true,
        name: "My Archive",
        user: { user_id },
      },
    });
    return TempDirectory[0].directory_id;
  } catch (e) {
    console.log(e);
  }
};
