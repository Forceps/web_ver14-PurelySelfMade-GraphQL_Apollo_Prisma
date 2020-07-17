import stF_result from "../../../../../../../Abyss/Interconnectedness/Extraction/postRecommendToUser/stF_result";

export default {
  Query: {
    postRecommendToUser: async (
      _: void,
      { user_id }: { user_id: number },
      { req, isAuthenticated }: any
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
