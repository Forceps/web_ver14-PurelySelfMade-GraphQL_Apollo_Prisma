import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import fs from "fs";
import path from "path";
import { assetsLocation } from "../../../../../../assets/im_here";
import { MusicDeleteMutationArgs } from "../../../../LibForGQL/mergedSchema/types/graph";

export default {
  Mutation: {
    musicDelete: async (
      _: null,
      args: MusicDeleteMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { music_id } = args;
      try {
        interface fileThingType {
          address: string;
        }
        const fileThing: fileThingType | null = await prisma.music.findOne({
          where: { music_id },
          select: { address: true },
        });
        if (fileThing !== null) {
          fs.unlinkSync(
            path.join(assetsLocation() + "/.." + `/${fileThing.address}`)
          );
          await prisma.music.delete({
            where: { music_id },
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
