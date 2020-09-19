import React, { createContext, useState, useContext, ReactNode } from "react";

const UpdatePostCtx = createContext<UpdatePostObj | undefined>(undefined);
export const UpdatePostProvider = ({ children }: { children: ReactNode }) => {
  const [UpdatePost, setUpdatePost] = useState(false);

  const Obj = { UpdatePost, setUpdatePost };

  return (
    <UpdatePostCtx.Provider value={Obj}>{children}</UpdatePostCtx.Provider>
  );
};
interface UpdatePostObj {
  UpdatePost: boolean;
  setUpdatePost: React.Dispatch<React.SetStateAction<boolean>>;
}
export const useUpdatePost = () => {
  const state = useContext(UpdatePostCtx);
  if (!state) throw new Error("UpdatePost not found");
  return state;
};
