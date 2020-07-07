import React, { useState } from "react";
import styled from "styled-components";
import { W100per } from "../../GlobalLib/Styles/IteratePattern/WH100per";
import DataSpreadCon from "./DataSpread/DataSpreadCon";
import LeftSideMenuCon from "../../Components/ElementEtc/LeftSideMenu/LeftSideMenuCon";
import NotificationDetailCon from "../../Components/Notification/NotificationDetail/NotificationDetailCon";

const Packing = styled(W100per)`
  display: grid;
  grid-template-columns: 240px 1fr;
`;
const NonPop = styled(W100per)`
  display: flex;
  min-height: 100px;
  padding: 30px 0 0 0;
`;

export default () => {
  const [NotiDetlOp, setNotiDetlOp] = useState(false);
  const [NotiId, setNotiId] = useState(0);
  return (
    <>
      <Packing>
        <LeftSideMenuCon />
        <NonPop>
          <DataSpreadCon setNotiDetlOp={setNotiDetlOp} setNotiId={setNotiId} />
        </NonPop>
      </Packing>
      {NotiDetlOp && (
        <NotificationDetailCon
          notification_id={NotiId}
          setNotificationDetailOpen={setNotiDetlOp}
        />
      )}
    </>
  );
};
