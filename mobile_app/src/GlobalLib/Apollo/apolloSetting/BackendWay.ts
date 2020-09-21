import { HttpLink, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import AsyncStorage from "@react-native-community/async-storage";

const PORT = 4002;
const localhost = `http://127.0.0.1:${PORT}`;
const localWebSoket = `ws://127.0.0.1:${PORT}`;
const ngrok = "https://549a9aec4f3f.ngrok.io";
const ngrokWs = "ws://549a9aec4f3f.ngrok.io";
export const http_BackEnd = true ? ngrok : localhost;
export const webSoket_BackEnd = false ? ngrokWs : localWebSoket;
export const jwt_header = {
  Authorization: `Bearer ${AsyncStorage.getItem("token")}`,
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

export const makeBackEndReceiveCompatible = (uri: string) => {
  const strFront = uri.substring(0, localhost.length);
  const strBack = uri.substring(localhost.length, uri.length);
  if (strFront === localhost) {
    return http_BackEnd + strBack;
  } else {
    return uri;
  }
};
