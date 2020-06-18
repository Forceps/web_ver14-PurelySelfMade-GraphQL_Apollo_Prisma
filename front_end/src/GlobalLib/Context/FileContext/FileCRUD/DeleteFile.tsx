import React, { createContext, useState, useContext, ReactNode } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useDirMode } from "../../ProfileContext/DirMode";
import { DELETE_FILE } from "../../../Apollo/GraphQL_Client/Media/MediaD";

const FileDeleteCtx = createContext<FileDeleteProcessObj | undefined>(
  undefined
);
export const FileDeleteProcessProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const DC = useDirMode();
  const [DeleteTargetId, setDeleteTargetId] = useState<number | null>(null);
  const AwaitableSetDT = (e: number) => {
    return new Promise((sol, jec) => {
      setDeleteTargetId(e);
      sol("");
    });
  };
  const [deleteFileMutation] = useMutation(DELETE_FILE, {
    variables: { image_id: DeleteTargetId },
  });
  const FileDeleteProcess = async (delete_target_id: number) => {
    await AwaitableSetDT(delete_target_id);
    try {
      await deleteFileMutation();
    } catch (e) {
      console.log(e);
    } finally {
      DC.DirData_refetch();
    }
  };

  const Obj = { FileDeleteProcess };

  return (
    <FileDeleteCtx.Provider value={Obj}>{children}</FileDeleteCtx.Provider>
  );
};
interface FileDeleteProcessObj {
  FileDeleteProcess: (delete_target_id: number) => any;
}
export const useDeleteFile = () => {
  const state = useContext(FileDeleteCtx);
  if (!state) throw new Error("FileDeleteProcess not found");
  return state;
};
