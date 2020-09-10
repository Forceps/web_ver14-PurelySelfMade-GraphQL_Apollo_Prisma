import stF_result from "../../../../../../../Abyss/Interconnectedness/Extraction/PostRecommend/ToUser/stF_result";
import { contextType } from "../../../../../../LibForGQL/typesLib";

export default {
  Query: {
    postRecommendToUser: async (
      _: void,
      { user_id }: { user_id: number },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      try {
        const result = await stF_result(user_id);
        return result;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
