import { postRecommendByPostLogic } from "../../../../../../../Abyss/Interconnectedness/Extraction/PostRecommend/ByPost/stF_result";

export default {
  Query: {
    postRecommendByPost: async (_: void, { post_ids, skip, take }) => {
      try {
        const result = postRecommendByPostLogic(post_ids, skip, take);
        return result;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
