import { PrismaClient } from "@prisma/client";
import {
  relevanceSigmoid,
  IntMemorySize,
  interestFade,
} from "../../../AbyssLib/formula";
import { GeoMean } from "../../../../GlobalLib/recycleFunction/Arithmetic";
import { Latest } from "./stF_result";

const prisma = new PrismaClient();

export default async (
  newPost: number,
  oldPost: number,
  latest: Latest,
  howMuchOld: number
) => {
  const relevMade = await prisma.post_relevance.create({
    data: {
      post_postTopost_relevance_post1: {
        connect: {
          post_id: newPost,
        },
      },
      post_postTopost_relevance_post2: {
        connect: {
          post_id: oldPost,
        },
      },
      degree: relevanceSigmoid(
        GeoMean(interestFade(oldPost, howMuchOld), latest.interest) /
          IntMemorySize,
        "post"
      ),
    },
    select: {
      post_relevance_id: true,
      degree: true,
      post_postTopost_relevance_post1: {
        select: {
          user: true,
        },
      },
      post_postTopost_relevance_post2: {
        select: {
          user: true,
        },
      },
    },
  });
  if (
    relevMade.post_postTopost_relevance_post1.user ===
    relevMade.post_postTopost_relevance_post2.user
  ) {
    await prisma.post_relevance.update({
      where: {
        post_relevance_id: relevMade.post_relevance_id,
      },
      data: {
        degree: Math.floor(relevMade.degree / 10),
      },
    });
  }
};
