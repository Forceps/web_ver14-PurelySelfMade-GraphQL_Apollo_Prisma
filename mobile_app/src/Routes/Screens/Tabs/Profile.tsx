import React from "react";
import { ScrollView } from "react-native";
import Loading from "../../../Components/ElementEtc/Effect/Loading";
import { useMyInfo } from "../../../GlobalLib/Context/UserContext/Me";

export default () => {
  const { MEloading, MEdata } = useMyInfo();
  return (
    <ScrollView>
      {MEloading ? <Loading /> : MEdata && <UserProfile {...MEdata} />}
    </ScrollView>
  );
};
