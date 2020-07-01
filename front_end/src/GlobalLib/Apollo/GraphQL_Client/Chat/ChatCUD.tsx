import gql from "graphql-tag";

export const ADD_COMMENT = gql`
  mutation commenting($chat_room_id: Int!, $comment: String!) {
    commenting(chat_room_id: $chat_room_id, comment: $comment)
  }
`;
