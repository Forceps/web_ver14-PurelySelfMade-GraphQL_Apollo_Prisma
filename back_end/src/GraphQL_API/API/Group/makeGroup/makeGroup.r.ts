import { PrismaClient } from "@prisma/client";
import { MakeGroupMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
import { S_N_to_N } from "../../../../GlobalLib/RecycleFunction/type_convert";
import { groupSystemId } from "../../../LibForGQL/findByPrisma/findGroupSystemId";
const prisma = new PrismaClient();

export default {
  Mutation: {
    makeGroup: async (
      _: void,
      args: MakeGroupMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const {
        user: { user_id },
      } = request;
      const {
        name,
        purpose,
        participation_system,
        withdrawal_system,
        identiti_back_img,
        identiti_profile_img,
      } = args;
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
                connect: { user_id: S_N_to_N(user_id) },
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
        } else {
          console.log(
            "'participation_system_id' or 'withdrawal_system_id' can't find"
          );
        }
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
