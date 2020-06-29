import { withClientState } from "apollo-link-state";
import authResolver from "./auth/authResolver";
import { authState_defaults } from "./auth/authQuery";
import { InMemoryCache } from "apollo-cache-inmemory";

export const cache = new InMemoryCache();

const defaults = {
  ...authState_defaults,
};

const resolvers = {
  Mutation: {
    ...authResolver.Mutation,
  },
};

export default withClientState({
  cache,
  defaults,
  resolvers,
});
