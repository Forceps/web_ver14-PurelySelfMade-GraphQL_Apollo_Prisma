import React, { useState, useEffect } from "react";
import PostCtrlPre from "./PostCtrlPre";
import { PostMetaInfoRequest } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostMeta/PostMetaInfo";
import useInput from "../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useTargetsShown } from "../../../../../GlobalLib/Context/PostContext/TargetsShown/TargetsShown";
import { useProfileDetailMode } from "../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";

export default () => {
  const TSP = useTargetsShown();
  const PfDM = useProfileDetailMode();
  const { data, loading } = PostMetaInfoRequest();
  const [createPost, setCreatePost] = useState(false);
  const [PagenationNum, setPagenationNum] = useState([1]);
  const [UpperUnitPageNum, setUpperUnitPageNum] = useState([1]);
  const [CurrentUUP, setCurrentUUP] = useState(1);
  const SearchKeyWord = useInput("");
  const create_post_toggle = () => {
    setCreatePost((p) => !p);
  };
  const Search = async (e: any) => {
    spaped(e);
    if (SearchKeyWord.value) {
      await TSP.setKeyWord(SearchKeyWord.value);
      await TSP.SrloadGreeting();
      TSP.setPostTargetMode("Search");
    } else {
      TSP.setPostTargetMode("Whose");
    }
  };

  useEffect(() => {
    const divide = Math.ceil(PfDM.TotalPostCount / PfDM.PostOneTimeShow);
    const divideU = Math.ceil(divide / 10);

    let arrU: number[] = [];
    for (let i = 1; i <= divideU; i++) {
      arrU = arrU.concat(i);
    }
    setUpperUnitPageNum(arrU);

    let arr: number[] = [];
    if (CurrentUUP === divideU) {
      for (
        let i = (divideU - 1) * 10 + 1;
        i <= divide - (divideU - 1) * 10;
        i++
      ) {
        arr = arr.concat(i);
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        arr = arr.concat((CurrentUUP - 1) * 10 + i);
      }
    }
    setPagenationNum(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PfDM.TotalPostCount]);

  return loading ? (
    <div />
  ) : (
    <PostCtrlPre
      data={data?.postMetaInfo}
      createPost={createPost}
      create_post_toggle={create_post_toggle}
      Search={Search}
      SearchKeyWord={SearchKeyWord}
      PagenationNum={PagenationNum}
      UpperUnitPageNum={UpperUnitPageNum}
      setCurrentUUP={setCurrentUUP}
    />
  );
};
