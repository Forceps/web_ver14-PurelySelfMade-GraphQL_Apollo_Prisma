import { withClientState } from "apollo-link-state";
import authResolver from "./auth/authResolver";
import { authState_defaults } from "./auth/authQuery";

const defaults = {
  ...authState_defaults,
};

const resolvers = {
  Mutation: {
    ...authResolver.Mutation,
  },
};

export default withClientState({
  defaults,
  resolvers,
});
