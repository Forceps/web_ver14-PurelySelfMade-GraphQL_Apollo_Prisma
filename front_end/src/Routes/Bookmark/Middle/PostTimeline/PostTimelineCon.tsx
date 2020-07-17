import React, { useEffect } from "react";
import PostTimelinePre from "./PostTimelinePre";
import { usePostDetail } from "../../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import { useDummyState } from "../../../../GlobalLib/Context/Lib/DummyState";
import { useProfileMode } from "../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import { useDirMode } from "../../../../GlobalLib/Context/ProfileContext/DirMode";
import { SubscriptionPostRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostSubscription";

export default () => {
  const { loading, data } = SubscriptionPostRequest();
  const PD = usePostDetail();
  const { setDummyState } = useDummyState();
  const Pmode = useProfileMode();
  const DC = useDirMode();
  const Pretreatment = async () => {
    Pmode.rememberLatestMode.current = Pmode.Mode;
    DC.rememberLocation.current = DC.Location;
    if (Pmode.Mode[0] !== "Post") {
      DC.setLocation(0);
      Pmode.setMode(["Post"]);
    }
  };
  useEffect(() => {
    Pretreatment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setDummyState((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PD]);

  return <PostTimelinePre loading={loading} data={data?.subscriptionPost} />;
};
