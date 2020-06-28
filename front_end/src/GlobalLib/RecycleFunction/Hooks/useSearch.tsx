import useInput from "./useInput";
import { useSearchUser } from "../../Context/UserContext/SearchUser";
import { useTargetsShown } from "../../Context/PostContext/TargetsShown/TargetsShown";
import { spaped } from "../etc/StopAndPrevent";

export default (setSeeMode?: any) => {
  const TSP = useTargetsShown();
  const SU = useSearchUser();
  const SearchKeyWord = useInput("");
  const Search = async (e: any) => {
    spaped(e);
    if (SearchKeyWord.value) {
      await TSP.setKeyWord(SearchKeyWord.value);
      await SU.setKeyWord(SearchKeyWord.value);
      await TSP.SrloadGreeting();
      await SU.loadGreeting();
      TSP.setPostTargetMode("Search");
      if (setSeeMode) {
        setSeeMode("Search");
      }
    } else {
      TSP.setPostTargetMode("All");
      if (setSeeMode) {
        setSeeMode("Default");
      }
    }
  };

  return { SearchKeyWord, Search };
};
