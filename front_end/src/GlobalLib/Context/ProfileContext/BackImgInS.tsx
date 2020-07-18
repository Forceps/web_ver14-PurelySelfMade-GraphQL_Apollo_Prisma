import React, { createContext, useState, useContext, ReactNode } from "react";
import { useMyInfo } from "../UserContext/Me";
import { useMutation } from "@apollo/client";
import { SET_BACKIMG } from "../../Apollo/GraphQL_Client/User/UserCUD";
import { SEE_USER } from "../../Apollo/GraphQL_Client/User/UserRseries/UserR";
import { S_N_to_N } from "../../RecycleFunction/etc/type_convert";

const BackgroundImageInsert = createContext<DirSelectorModeObj | undefined>(
  undefined
);
export const BackImgInSProvider = ({ children }: { children: ReactNode }) => {
  const ME = useMyInfo();
  const [DesignateBackImg, setDesignateBackImg] = useState(false);
  const [UpdateBackImgMutation] = useMutation(SET_BACKIMG, {
    refetchQueries: () => [
      {
        query: SEE_USER,
        variables: {
          user_id: S_N_to_N(ME.MEdata.user_id),
        },
      },
    ],
  });
  const BackImgPathInsert = (address: string): void => {
    UpdateBackImgMutation({
      variables: {
        back_img: address.replace(/\\/gi, "/"),
      },
    });
    setDesignateBackImg(false);
  };

  const Obj = {
    DesignateBackImg,
    setDesignateBackImg,
    UpdateBackImgMutation,
    BackImgPathInsert,
  };

  return (
    <BackgroundImageInsert.Provider value={Obj}>
      {children}
    </BackgroundImageInsert.Provider>
  );
};
interface DirSelectorModeObj {
  DesignateBackImg: boolean;
  setDesignateBackImg: any;
  UpdateBackImgMutation: any;
  BackImgPathInsert: (e: any, address: string) => void;
}
export const useBackImgInS = () => {
  const state = useContext(BackgroundImageInsert);
  if (!state) throw new Error("BackgroundImageInsert not found");
  return state;
};
