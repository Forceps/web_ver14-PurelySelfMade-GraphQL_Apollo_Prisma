import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import fs from "fs";
import path from "path";
import { assetsLocation } from "../../../../../../GlobalLib/assets/im_here";
import { ImgDeleteMutationArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";

export default {
  Mutation: {
    imgDelete: async (
      _: void,
      args: ImgDeleteMutationArgs,
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
      const { image_id } = args;
      try {
        interface fileThingType {
          address: string;
        }
        const fileThing: fileThingType | null = await prisma.image.delete({
          where: { image_id },
          select: { address: true },
        });
        fs.unlinkSync(
          path.join(
            assetsLocation() + "/uploadedFiles" + `/${fileThing.address}`
          )
        );
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
