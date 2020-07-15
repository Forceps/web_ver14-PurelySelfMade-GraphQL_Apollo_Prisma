import { withClientState } from "apollo-link-state";
import authResolver from "./auth/authResolver";
import { authState_defaults } from "./auth/authQuery";
import { InMemoryCache } from "@apollo/client";
import { historyState_defaults } from "./history/historyQuery";
import historyResolver from "./history/historyResolver";

export const cache = new InMemoryCache();

const defaults = {
  ...authState_defaults,
  ...historyState_defaults,
};

export const resolvers = {
  Mutation: {
    ...authResolver.Mutation,
    ...historyResolver.Mutation,
  },
};

export default withClientState({
  defaults,
  resolvers,
});
