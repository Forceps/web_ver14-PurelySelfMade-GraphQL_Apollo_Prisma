import { contextType } from "../../../../../LibForGQL/typesLib";

export default {
  Mutation: {
    currentPasswordConfirm: async (
      _: void,
      { current_password },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      try {
        const realPW = req.user.password;
        if (current_password === realPW) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
