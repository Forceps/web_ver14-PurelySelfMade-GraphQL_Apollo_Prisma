import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const SEE_ROOMS = gql`
  query seeRooms($skip: Int, $take: Int) {
    seeRooms(skip: $skip, take: $take) {
      chat_room_id
      name
      chat_member {
        user
        user_chat_memberTouser {
          avatar
        }
      }
    }
  }
`;
export const SeeRoomsRequest = (skip: number, take: number) =>
  useQuery(SEE_ROOMS, {
    variables: { skip, take },
  });
export const SEE_ROOM = gql`
  query seeRoom($chat_room_id: Int!) {
    seeRoom(chat_room_id: $chat_room_id) {
      chat_room_id
      name
    }
  }
`;
export const SeeRoomRequest = (chat_room_id: number) =>
  useQuery(SEE_ROOM, {
    variables: { chat_room_id },
  });

export const CHAT_DETAIL = gql`
  query chatDetail($chat_room_id: Int!, $skip: Int, $take: Int) {
    chatDetail(chat_room_id: $chat_room_id, skip: $skip, take: $take) {
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
export const ChatDetailRequest = (
  chat_room_id: number,
  skip?: number,
  take?: number
) =>
  useQuery(CHAT_DETAIL, {
    variables: { chat_room_id, skip: skip ? skip : 0, take: take ? take : 4 },
  });

export const TALK_COMRADES = gql`
  query talkComrades($skip: Int!, $take: Int) {
    talkComrades(skip: $skip, take: $take) {
      user_id
      username
      avatar
    }
  }
`;
export const TalkComradesRequest = (skip?: number, take?: number) =>
  useQuery(TALK_COMRADES, {
    variables: { skip: skip ? skip : 0, take: take ? take : 0 },
  });
