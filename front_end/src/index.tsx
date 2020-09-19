import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import "./GlobalLib/Assets/fontello-ac053006/css/fontello.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./GlobalLib/Apollo/ApolloConnection";
import ContextApply from "./Routes/AppRoot/ContextApply";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Helmet>
      <title>Square Post</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700"
      />
    </Helmet>
    <React.StrictMode>
      <ContextApply />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
