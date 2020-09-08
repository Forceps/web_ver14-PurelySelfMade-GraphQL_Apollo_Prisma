import { PrismaClient } from "@prisma/client";
import { S_N_to_N } from "../../../../../../../GlobalLib/recycleFunction/type_convert";
import { SeeRoomsQueryArgs } from "../../../../../../LibForGQL/mergedSchema/types/graph";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    seeRooms: async (
      _: void,
      { skip, take }: SeeRoomsQueryArgs,
      { req, isAuthenticated }: contextType
    ) => {
      try {
        isAuthenticated(req);
        const user_id = S_N_to_N(req.user.user_id);
        const result = await prisma.chat_room.findMany({
          where: {
            chat_member: {
              some: {
                user: user_id,
              },
            },
          },
          include: {
            chat_member: {
              include: {
                user_chat_memberTouser: true,
              },
            },
          },
          orderBy: { chat_room_id: "desc" },
          skip: typeof skip === "number" ? skip : 0,
          take: take ? take : 6,
        });
        return result;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
