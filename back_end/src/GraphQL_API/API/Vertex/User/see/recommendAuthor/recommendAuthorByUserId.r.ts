import st1_myRelatedUser from "../../../../../../Abyss/Interconnectedness/Extraction/userRecommend/directlyByRelevance/st1_myRelatedUser";

export default {
  Query: {
    recommendAuthorByUserId: async (_: void, args) => {
      const { user_id } = args;
      try {
        const usersCloseToMe = await st1_myRelatedUser(user_id);
        return usersCloseToMe;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
