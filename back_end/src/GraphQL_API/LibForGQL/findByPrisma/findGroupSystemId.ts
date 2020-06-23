import { PrismaClient } from "@prisma/client";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/type_convert";
const prisma = new PrismaClient();

export const groupSystemId = async (name: string) => {
  try {
    const Gsystem = await prisma.group_system.findMany({
      where: {
        name,
      },
    });
    return S_N_to_N(Gsystem[0].group_system_id);
  } catch (e) {
    console.log(e);
  }
};
