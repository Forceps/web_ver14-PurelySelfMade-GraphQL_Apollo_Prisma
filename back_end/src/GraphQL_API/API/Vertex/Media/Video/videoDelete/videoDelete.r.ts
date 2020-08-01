import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import fs from "fs";
import { binaryFileLocation } from "../../../../../../GlobalLib/assets/im_here";
import { VideoDeleteMutationArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";

export default {
  Mutation: {
    videoDelete: async (
      _: void,
      { video_id }: VideoDeleteMutationArgs,
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
      try {
        const fileThing = await prisma.video.delete({
          where: { video_id },
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
