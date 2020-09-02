import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import fs from "fs";
import { binaryFileLocation } from "../../../../../../../GlobalLib/assets/im_here";
import { MusicDeleteMutationArgs } from "../../../../../../LibForGQL/mergedSchema/types/graph";
import { contextType } from "../../../../../../LibForGQL/typesLib";

export default {
  Mutation: {
    musicDelete: async (
      _: null,
      { music_id }: MusicDeleteMutationArgs,
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      try {
        const fileThing = await prisma.music.delete({
          where: { music_id },
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
