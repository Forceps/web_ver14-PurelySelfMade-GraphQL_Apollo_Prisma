import React, { createContext, useContext, ReactNode } from "react";
import { useMutation } from "@apollo/react-hooks";
import { S_N_to_N } from "../../../RecycleFunction/etc/type_convert";
import { DELETE_POST } from "../../../Apollo/GraphQL_Client/Post/PostCUD";

const PostDeleteCtx = createContext<PostDeleteProcessObj | undefined>(
  undefined
);
export const PostDeleteProcessProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [deletePostMutation] = useMutation(DELETE_POST);

  const PostDeleteProcess = async (delete_target_id: string | number) => {
    let converted = S_N_to_N(delete_target_id);
    if (converted !== -1) {
      try {
        await deletePostMutation({
          variables: { post_id: converted },
        });
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const Obj = { PostDeleteProcess };

  return (
    <PostDeleteCtx.Provider value={Obj}>{children}</PostDeleteCtx.Provider>
  );
};
interface PostDeleteProcessObj {
  PostDeleteProcess: (delete_target_id: number) => void;
}
export const useDeletePost = () => {
  const state = useContext(PostDeleteCtx);
  if (!state) throw new Error("PostDeleteProcess not found");
  return state;
};
