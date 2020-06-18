import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import fs from "fs";
import path from "path";
import { assetsLocation } from "../../../../../../assets/im_here";

export default {
  Mutation: {
    musicDelete: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { music_id } = args;
      try {
        const fileThing = await prisma.music.findOne({
          where: { music_id },
          select: { address: true },
        });
        fs.unlinkSync(
          path.join(assetsLocation() + "/.." + `/${fileThing.address}`)
        );
        await prisma.music.delete({
          where: { music_id },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
