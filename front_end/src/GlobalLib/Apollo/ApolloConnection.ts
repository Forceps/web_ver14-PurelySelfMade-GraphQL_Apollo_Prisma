import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import LocalState, { cache } from "./LocalState/LocalState";
import requestContext from "./apolloSetting/requestContext";
import ErrorOccured from "./apolloSetting/ErrorOccured";
import BackendWay from "./apolloSetting/BackendWay";

export default new ApolloClient({
  link: ApolloLink.from([ErrorOccured, requestContext, LocalState, BackendWay]),
  cache,
});
