import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const SEE_ROOMS = gql`
  query seeRooms($skip: Int, $take: Int) {
    seeRooms(skip: $skip, take: $take) {
      chat_room_id
      name
      chat {
        chat_id
        user
        user_chatTouser {
          avatar
        }
        comment
      }
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
