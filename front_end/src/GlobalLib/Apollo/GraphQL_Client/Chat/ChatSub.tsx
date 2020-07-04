import gql from "graphql-tag";

export const CHAT_LISTENING = gql`
  subscription chatListening {
    chatListening {
      chat_id
      user
      user_chatTouser {
        user_id
        username
        avatar
      }
      comment
    }
  }
`;
