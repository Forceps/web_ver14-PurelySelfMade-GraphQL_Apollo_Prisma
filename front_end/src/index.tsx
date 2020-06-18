import React from "react";
import ReactDOM from "react-dom";
import "./GlobalLib/Assets/fontello-7334b8f2/css/fontello.css";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloConnection from "./GlobalLib/Apollo/ApolloConnection";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

ReactDOM.render(
  <ApolloProvider client={ApolloConnection}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
