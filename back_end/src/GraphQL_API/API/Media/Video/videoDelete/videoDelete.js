import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import fs from "fs";
import path from "path";
import { assetsLocation } from "../../../../../../assets/im_here";

export default {
  Mutation: {
    videoDelete: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { video_id } = args;
      try {
        const fileThing = await prisma.video.findOne({
          where: { video_id },
          select: { address: true },
        });
        fs.unlinkSync(
          path.join(assetsLocation() + "/.." + `/${fileThing.address}`)
        );
        await prisma.video.delete({
          where: { video_id },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
