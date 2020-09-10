import { PrismaClient } from "@prisma/client";
import {
  relevanceSigmoid,
  relevanceSigmoidInverse,
  IntMemorySize,
  interestFade,
} from "../../../AbyssLib/formula";
import { GeoMean } from "../../../../GlobalLib/recycleFunction/Arithmetic";
import { Latest } from "./stF_result";

const prisma = new PrismaClient();

export default async (
  updateObject: updateObjectType,
  latest: Latest,
  pastInterest: number,
  order: number
) => {
  let sameAuthorPenalty = 1;
  if (
    updateObject.post_postTopost_relevance_post1.user ===
    updateObject.post_postTopost_relevance_post2.user
  ) {
    sameAuthorPenalty = 10;
  }
  await prisma.post_relevance.update({
    where: {
      post_relevance_id: updateObject.post_relevance_id,
    },
    data: {
      degree:
        updateObject.degree > 64999
          ? 65000
          : relevanceSigmoid(
              (relevanceSigmoidInverse(updateObject.degree, "post") *
                IntMemorySize +
                GeoMean(interestFade(pastInterest, order), latest.interest)) /
                (IntMemorySize * sameAuthorPenalty),
              "post"
            ),
    },
  });
};

interface updateObjectType {
  post_relevance_id: number;
  degree: number;
  post_postTopost_relevance_post1: {
    user: number;
  };
  post_postTopost_relevance_post2: {
    user: number;
  };
}
