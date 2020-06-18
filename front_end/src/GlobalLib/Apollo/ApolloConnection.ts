import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink, split, Observable } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { withClientState } from "apollo-link-state";
import { defaults, resolvers } from "./LocalState";

const PORT = 4002;
export const http_BackEnd = `http://127.0.0.1:${PORT}`;
export const webSoket_BackEnd = `ws://127.0.0.1:${PORT}`;

const httpLink = new HttpLink({
  uri: http_BackEnd,
});
const wsLink = new WebSocketLink({
  uri: webSoket_BackEnd,
  options: {
    reconnect: true,
  },
});

const request = async (operation: any) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: any;
      Promise.resolve(operation)
        .then((oper) => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);
export default new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    requestLink,
    withClientState({
      defaults,
      resolvers,
    }),
    split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    ),
  ]),
  cache: new InMemoryCache(),
});
