import { gql } from "@apollo/client";

export const ADD_SUBSCRIBER = gql`
  mutation addSubscriber($author: Int!) {
    addSubscriber(author: $author)
  }
`;
