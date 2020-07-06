import React from "react";
import DataSpreadPre from "./DataSpreadPre";
import { SeeNotiRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Notification/NotificationR";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";

export default () => {
  const { loading: NotiLoad, data: NotiData } = SeeNotiRequest(0, 9);
  const timeNote = (hour: number | string, minute: number | string): string => {
    hour = S_N_to_N(hour);
    minute = S_N_to_N(minute);
    if (minute < 10) {
      minute = `0${minute}`;
    }
    let string = "";
    hour >= 12
      ? (string = `${hour - 12}:${minute} pm`)
      : (string = `${hour}:${minute} am`);

    return string;
  };
  return (
    <DataSpreadPre
      NotiLoad={NotiLoad}
      NotiData={NotiData?.seeNoti}
      timeNote={timeNote}
    />
  );
};
