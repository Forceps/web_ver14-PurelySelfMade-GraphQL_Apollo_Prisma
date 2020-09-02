import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import fs from "fs";
import { binaryFileLocation } from "../../../../../../../GlobalLib/assets/im_here";
import { ImgDeleteMutationArgs } from "../../../../../../LibForGQL/mergedSchema/types/graph";
import { contextType } from "../../../../../../LibForGQL/typesLib";

export default {
  Mutation: {
    imgDelete: async (
      _: void,
      { image_id }: ImgDeleteMutationArgs,
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      try {
        const fileThing = await prisma.image.delete({
          where: { image_id },
          select: { address: true },
        });
        fs.unlinkSync(binaryFileLocation(fileThing.address));
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
