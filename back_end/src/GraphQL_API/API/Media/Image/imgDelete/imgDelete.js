import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import fs from "fs";
import path from "path";
import { assetsLocation } from "../../../../../../assets/im_here";

export default {
  Mutation: {
    imgDelete: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { image_id } = args;
      try {
        const fileThing = await prisma.image.findOne({
          where: { image_id },
          select: { address: true },
        });
        fs.unlinkSync(
          path.join(assetsLocation() + "/.." + `/${fileThing.address}`)
        );
        await prisma.image.delete({
          where: { image_id },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
