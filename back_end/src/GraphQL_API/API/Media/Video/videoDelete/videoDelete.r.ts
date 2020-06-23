import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import fs from "fs";
import path from "path";
import { assetsLocation } from "../../../../../../assets/im_here";

interface videoDeleteArgsTypes {
  video_id: number;
}
export default {
  Mutation: {
    videoDelete: async (
      _: null,
      args: videoDeleteArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { video_id } = args;
      try {
        interface fileThingType {
          address: string;
        }
        const fileThing: fileThingType | null = await prisma.video.findOne({
          where: { video_id },
          select: { address: true },
        });
        if (fileThing !== null) {
          fs.unlinkSync(
            path.join(assetsLocation() + "/.." + `/${fileThing.address}`)
          );
          await prisma.video.delete({
            where: { video_id },
          });
        }
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
