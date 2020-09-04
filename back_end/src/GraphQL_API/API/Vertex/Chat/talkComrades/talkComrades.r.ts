import { PrismaClient } from "@prisma/client";
import { S_N_to_N } from "../../../../../GlobalLib/recycleFunction/type_convert";
import { contextType } from "../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    talkComrades: async (
      _: void,
      { skip, take },
      { req, isAuthenticated }: contextType
    ) => {
      try {
        isAuthenticated(req);
        const user_id = S_N_to_N(req.user.user_id);
        const result = await prisma.user.findMany({
          where: {
            chat_member: {
              some: {
                chat_room: {
                  chat_member: {
                    some: {
                      user: user_id,
                    },
                  },
                },
              },
            },
          },
          skip: typeof skip === "number" ? skip : 0,
          take: take ? take : 6,
        });

        const idx = result.findIndex((i) => {
          return S_N_to_N(i.user_id) === user_id;
        });
        let tempA = result;
        tempA.splice(idx, 1);

        return tempA;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
