import React, { createContext, useContext, ReactNode } from "react";
import { useMutation } from "@apollo/client";
import { useDirMode } from "../../ProfileContext/DirMode";
import {
  MUSIC_DELETE,
  VIDEO_DELETE,
  IMG_DELETE,
} from "../../../Apollo/GraphQL_Client/Media/MediaD";

const FileDeleteCtx = createContext<FileDeleteProcessObj | undefined>(
  undefined
);
export const FileDeleteProcessProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { DirData_refetch } = useDirMode();
  const [deleteImageMutation] = useMutation(IMG_DELETE);
  const [deleteVideoMutation] = useMutation(VIDEO_DELETE);
  const [deleteAudioMutation] = useMutation(MUSIC_DELETE);

  const FileDeleteProcess = async (
    delete_target_id: number,
    mediaType: string
  ) => {
    try {
      if (mediaType === "image") {
        await deleteImageMutation({
          variables: { image_id: delete_target_id },
        });
      } else if (mediaType === "audio") {
        await deleteAudioMutation({
          variables: { music_id: delete_target_id },
        });
      } else {
        await deleteVideoMutation({
          variables: { video_id: delete_target_id },
        });
      }
    } catch (e) {
      console.log(e);
    } finally {
      DirData_refetch();
    }
  };

  const Obj = { FileDeleteProcess };

  return (
    <FileDeleteCtx.Provider value={Obj}>{children}</FileDeleteCtx.Provider>
  );
};
interface FileDeleteProcessObj {
  FileDeleteProcess: (delete_target_id: number, mediaType: string) => any;
}
export const useDeleteFile = () => {
  const state = useContext(FileDeleteCtx);
  if (!state) throw new Error("FileDeleteProcess not found");
  return state;
};
