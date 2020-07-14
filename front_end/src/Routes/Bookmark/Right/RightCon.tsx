import React, { useState } from "react";
import RightPre from "./RightPre";
import { useTargetsShown } from "../../../GlobalLib/Context/PostContext/TargetsShown/TargetsShown";
import useInput from "../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useSearchUser } from "../../../GlobalLib/Context/UserContext/SearchUser";
import { useParams } from "react-router-dom";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";

export default ({ setSeeMode }: RightConProps) => {
  const { user_id: user_id_extract }: any = useParams();
  const user_id = S_N_to_N(user_id_extract);
  const TSP = useTargetsShown();
  const SU = useSearchUser();
  const SearchKeyWord = useInput("");

  const [createPost, setCreatePost] = useState(false);

  const Search = async (e: any) => {
    spaped(e);
    if (SearchKeyWord.value) {
      await TSP.setKeyWord(SearchKeyWord.value);
      await SU.setKeyWord(SearchKeyWord.value);
      await TSP.SrloadGreeting();
      await SU.loadGreeting();
      TSP.setPostTargetMode("Search");
      setSeeMode("Search");
    } else {
      TSP.setPostTargetMode("All");
    }
  };

  return (
    <RightPre
      SearchKeyWord={SearchKeyWord}
      Search={Search}
      setCreatePost={setCreatePost}
      createPost={createPost}
      user_id={user_id}
    />
  );
};

interface RightConProps {
  setSeeMode: any;
}
