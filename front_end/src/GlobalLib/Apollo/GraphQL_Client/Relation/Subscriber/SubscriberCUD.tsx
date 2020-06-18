import gql from "graphql-tag";

export const ADD_SUBSCRIBER = gql`
  mutation addSubscriber($author: Int!) {
    addSubscriber(author: $author)
  }
`;
