import React from "react";
import CenterPre from "./CenterPre";

export default ({ UserData, UserDataLoading }: CenterCon) => {
  return <CenterPre UserData={UserData} UserDataLoading={UserDataLoading} />;
};

type CenterCon = {
  UserData: any;
  UserDataLoading: boolean;
};
