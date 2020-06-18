import React from "react";

export default ({ contexts, children }: ContextProvider) =>
  contexts.reduce(
    (prev: any, context: any) =>
      React.createElement(context, {
        children: prev
      }),
    children
  );

type ContextProvider = {
  contexts: any;
  children: any;
};
