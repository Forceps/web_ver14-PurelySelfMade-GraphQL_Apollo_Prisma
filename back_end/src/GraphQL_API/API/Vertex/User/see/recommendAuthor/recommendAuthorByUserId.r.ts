import stF_result from "../../../../../../Abyss/Interconnectedness/Extraction/userRecommend/directlyByRelevance/stF_result";

export default {
  Query: {
    recommendAuthorByUserId: async (
      _: void,
      __: void,
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
      const { user } = req;
      try {
        const usersCloseToMe = await stF_result(user.user_id);
        return usersCloseToMe;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
