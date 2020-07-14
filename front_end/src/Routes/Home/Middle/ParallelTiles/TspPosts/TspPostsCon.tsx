import React, { useEffect } from "react";
import ParallelTilesPre from "./TspPostsPre";
import { useTargetsShown } from "../../../../../GlobalLib/Context/PostContext/TargetsShown/TargetsShown";
import { usePostDetail } from "../../../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import { useDummyState } from "../../../../../GlobalLib/Context/Lib/DummyState";
import { useUpdatePost } from "../../../../../GlobalLib/Context/PostContext/PostCRUD/UpdatePost";
import { useProfileMode } from "../../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import { useDirMode } from "../../../../../GlobalLib/Context/ProfileContext/DirMode";

export default ({ SeeMode = "general" }: TspPostConProps) => {
  const TSP = useTargetsShown();
  const PD = usePostDetail();
  const DS = useDummyState();
  const UP = useUpdatePost();
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
    DS.setDummyState((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PD]);

  return <ParallelTilesPre TSP={TSP} PD={PD} UP={UP} SeeMode={SeeMode} />;
};
interface TspPostConProps {
  SeeMode?: string;
}
