import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import fs from "fs";
import path from "path";
import { assetsLocation } from "../../../../../GlobalLib/assets/im_here";
import { ImgDeleteMutationArgs } from "../../../../LibForGQL/mergedSchema/types/graph";

export default {
  Mutation: {
    imgDelete: async (
      _: void,
      args: ImgDeleteMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { image_id } = args;
      try {
        interface fileThingType {
          address: string;
        }
        const fileThing: fileThingType | null = await prisma.image.findOne({
          where: { image_id },
          select: { address: true },
        });
        if (fileThing !== null) {
          fs.unlinkSync(
            path.join(assetsLocation() + "/.." + `/${fileThing.address}`)
          );
          await prisma.image.delete({
            where: { image_id },
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
