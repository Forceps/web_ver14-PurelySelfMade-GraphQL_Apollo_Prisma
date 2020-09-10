import st1_extractRelevanceByRank from "./st1_extractRelevanceByRank";
import st2_relevToPostFormProcessing from "./st2_relevToPostFormProcessing";
import st3_removeDuplicates from "./st3_removeDuplicates";

export const postRecommendByPostLogic = async (
  post_ids: number[],
  skip: number,
  take: number
) => {
  const ranks = await st1_extractRelevanceByRank(post_ids, skip, take);

  let postProsed: any[] = await st2_relevToPostFormProcessing(ranks);

  postProsed = await st3_removeDuplicates(postProsed);

  for (let i = 0; i < post_ids.length; i++) {
    let inputedNum = postProsed.findIndex((j) => j.post_id === post_ids[i]);
    postProsed.splice(inputedNum, 1);
  }

  return postProsed;
};
