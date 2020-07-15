import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { S_N_to_N } from "../../../RecycleFunction/etc/type_convert";
import { SeePostLazyRequest } from "../../../Apollo/GraphQL_Client/Post/PostR";

interface PostDetailContext {
  PostID: number;
  setPostID: (id: string | number) => void;
  postByID: any;
  postLoadingByID: boolean;
  postRefetchByID: any;
  OpenSeePostDetail: boolean;
  setOpenSeePostDetail: Dispatch<SetStateAction<boolean>>;
}
const PostDetail = createContext<PostDetailContext | undefined>(undefined);
export const PostDetailProvider = ({ children }: { children: ReactNode }) => {
  const [OpenSeePostDetail, setOpenSeePostDetail] = useState(false);
  const [PostID, settingPostID] = useState<number>(0);
  const setPostID = (id: string | number) => {
    const conv = S_N_to_N(id);
    settingPostID(conv);
  };
  const [postByID, setPostByID] = useState<any>(null);
  const [postLoadingByID, setPostLoadingByID] = useState(true);
  const [postRefetchByID, setPostRefetchByID] = useState<any>(null);
  const [PD_QueryLoad, { called, refetch, loading, data }] = SeePostLazyRequest(
    PostID
  );
  useEffect(() => {
    if (PostID !== 0) {
      PD_QueryLoad();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PostID]);
  useEffect(() => {
    if (PostID !== 0 && called) {
      if (data) {
        setPostByID(data.seePost);
      }
      setPostLoadingByID(loading);
      setPostRefetchByID(() => refetch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PostID, loading, called, refetch]);

  const Obj = {
    PostID,
    setPostID,
    postByID,
    postLoadingByID,
    postRefetchByID,
    OpenSeePostDetail,
    setOpenSeePostDetail,
  };
  return <PostDetail.Provider value={Obj}>{children}</PostDetail.Provider>;
};

export const usePostDetail = () => {
  const state = useContext(PostDetail);
  if (!state) throw new Error("PostDetail not found");
  return state;
};
