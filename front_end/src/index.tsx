import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import "./GlobalLib/Assets/fontello-ffae2900/css/fontello.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./GlobalLib/Apollo/ApolloConnection";
import App from "./App";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700"
      />
    </Helmet>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
