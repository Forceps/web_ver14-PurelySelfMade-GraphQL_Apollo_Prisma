import { PrismaClient } from "@prisma/client";
import { S_N_to_N } from "../../../GlobalLib/recycleFunction/type_convert";
const prisma = new PrismaClient();

export const groupSystemId = async (
  name: string
): Promise<number | undefined> => {
  try {
    const Gsystem = await prisma.group_system.findMany({
      where: {
        name,
      },
    });
    if (Gsystem && Gsystem[0] && Gsystem[0].group_system_id) {
      return S_N_to_N(Gsystem[0].group_system_id);
    } else {
      console.log(
        `'group_system_id' can't find. The cause of the problem is probably the wrong 'name'`
      );
      return undefined;
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
