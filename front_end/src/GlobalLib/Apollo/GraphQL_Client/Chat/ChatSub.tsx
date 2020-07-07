import gql from "graphql-tag";

export const CHAT_LISTENING = gql`
  subscription chatListening($chat_room_id: Int!) {
    chatListening(chat_room_id: $chat_room_id) {
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
