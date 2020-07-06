import React from "react";
import NotificationDetailPre from "./NotificationDetailPre";
import { NotiDetailRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Notification/NotificationR";

export default ({
  zIndex = 10,
  notification_id,
  setNotificationDetailOpen,
}: NotificationDetailConProps) => {
  const { loading, data } = NotiDetailRequest(notification_id);
  return (
    <NotificationDetailPre
      zIndex={zIndex}
      setNotificationDetailOpen={setNotificationDetailOpen}
      loading={loading}
      data={data?.notiDetail}
    />
  );
};
interface NotificationDetailConProps {
  zIndex?: number;
  notification_id: number;
  setNotificationDetailOpen: any;
}
