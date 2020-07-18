import React, { useState } from "react";
import LeftSideMenuPresenter from "./LeftSideMenuPre";
import { useMutation } from "@apollo/client";
import { LOCAL_LOG_OUT } from "../../../GlobalLib/Apollo/LocalState/auth/authQuery";

export default ({
  Notification = true,
  Chat = true,
  Bookmark = true,
  Log = true,
}: LeftSideMenuConProps) => {
  const [MoreMenu, setMoreMenu] = useState(false);
  const [localLogOutMutation] = useMutation(LOCAL_LOG_OUT);
  return (
    <LeftSideMenuPresenter
      MoreMenu={MoreMenu}
      setMoreMenu={setMoreMenu}
      localLogOutMutation={localLogOutMutation}
      Notification={Notification}
      Chat={Chat}
      Bookmark={Bookmark}
      Log={Log}
    />
  );
};

interface LeftSideMenuConProps {
  Notification?: boolean;
  Chat?: boolean;
  Bookmark?: boolean;
  Log?: boolean;
}
