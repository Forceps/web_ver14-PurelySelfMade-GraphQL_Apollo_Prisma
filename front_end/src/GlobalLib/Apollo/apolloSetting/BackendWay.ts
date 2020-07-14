import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const PORT = 4002;
export const http_BackEnd = `http://127.0.0.1:${PORT}`;
export const webSoket_BackEnd = `ws://127.0.0.1:${PORT}`;
export const jwt_header = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};
const httpLink = new HttpLink({
  uri: http_BackEnd,
});
const wsLink = new WebSocketLink({
  uri: webSoket_BackEnd,
  options: {
    connectionParams: jwt_header,
    reconnect: true,
  },
});
export default split(
  ({ query }) => {
    const { kind, operation }: any = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);
