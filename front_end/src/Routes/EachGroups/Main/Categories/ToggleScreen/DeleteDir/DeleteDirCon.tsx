import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import DeleteDirPre from "./DeleteDirPre";
import { useDirMode } from "../../../../../../GlobalLib/Context/ProfileContext/DirMode";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { DELETE_DIR } from "../../../../../../GlobalLib/Apollo/GraphQL_Client/Directory/DirectoryCUD";

export default ({
  setDeleteDirOpen,
  UDirObj,
  DKeyActive,
  setDKeyActive,
}: DeleteDirConProps) => {
  const DC = useDirMode();
  const DeleteDirTrigger = async (e: any) => {
    spaped(e);
    try {
      await DeleteDirMutation();
    } catch (e) {
      console.log(e);
    } finally {
      setDeleteDirOpen(false);
      DC.DirData_refetch();
    }
  };
  const [DeleteDirMutation] = useMutation(DELETE_DIR, {
    variables: {
      directory_id: parseInt(UDirObj.directory_id),
    },
  });
  useEffect(() => {
    setDKeyActive(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  document.addEventListener("keydown", (e: any) => {
    spaped(e);
    if (DKeyActive === true && e.keyCode === 13) {
      DeleteDirTrigger(e);
      setDKeyActive(false);
    }
  });

  return (
    <DeleteDirPre
      setDeleteDirOpen={setDeleteDirOpen}
      DeleteDirTrigger={DeleteDirTrigger}
      setDKeyActive={setDKeyActive}
    />
  );
};
type DeleteDirConProps = {
  setDeleteDirOpen: any;
  UDirObj: any;
  DKeyActive: boolean;
  setDKeyActive: any;
};
