import React, { useState, useEffect } from "react";
import VideoInSPre from "./VideoInSPre";
import useInput from "../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { VideoGetByDirIdRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Media/Video/VideoR";

type VideoURLProps = {
  setVideoSubMenuOp: any;
  VideoInsert: any;
  zIndex?: number;
};
export default ({
  setVideoSubMenuOp,
  VideoInsert,
  zIndex = 20,
}: VideoURLProps) => {
  const [VideoSelectMode, setVideoSelectMode] = useState("Youtube");
  const VideoURLText = useInput("");
  const {
    data: VideoList,
    loading: VideoListLod,
    refetch: VideoListRefetch,
  } = VideoGetByDirIdRequest(0, 0, 0, 10);
  const [AddVideoOpen, setAddVideoOpen] = useState(false);

  useEffect(() => {
    document.getElementById("videoURLTextInput")?.focus();
    VideoListRefetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <VideoInSPre
      setVideoSubMenuOp={setVideoSubMenuOp}
      VideoInsert={VideoInsert}
      VideoURLText={VideoURLText}
      VideoSelectMode={VideoSelectMode}
      setVideoSelectMode={setVideoSelectMode}
      zIndex={zIndex}
      VideoList={VideoList}
      VideoListLod={VideoListLod}
      VideoListRefetch={VideoListRefetch}
      AddVideoOpen={AddVideoOpen}
      setAddVideoOpen={setAddVideoOpen}
    />
  );
};
