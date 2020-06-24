import { PrismaClient } from "@prisma/client";
import { MakeGroupMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
import { S_N_to_N } from "../../../../GlobalLib/recycleFunction/type_convert";
import { groupSystemId } from "../../../LibForGQL/findByPrisma/findGroupSystemId";
const prisma = new PrismaClient();

export default {
  Mutation: {
    makeGroup: async (
      _: void,
      {
        name,
        purpose,
        participation_system,
        withdrawal_system,
        identiti_back_img,
        identiti_profile_img,
      }: MakeGroupMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const user_id = S_N_to_N(request.user.user_id);
      const [participation_system_id, withdrawal_system_id] = [
        await groupSystemId(participation_system),
        await groupSystemId(withdrawal_system),
      ];
      try {
        if (participation_system_id && withdrawal_system_id) {
          await prisma.group.create({
            data: {
              name,
              purpose,
              user: {
                connect: { user_id },
              },
              group_system_group_participation_systemTogroup_system: {
                connect: { group_system_id: participation_system_id },
              },
              group_system_group_withdrawal_systemTogroup_system: {
                connect: { group_system_id: withdrawal_system_id },
              },
              identiti_back_img,
              identiti_profile_img,
            },
          });
        }
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
