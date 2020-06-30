import React from "react";
import KernelsPre from "./KernelsPre";

export default ({ UserData, UserDataLoading }: LSIcon) => {
  return <KernelsPre UserData={UserData} UserDataLoading={UserDataLoading} />;
};

type LSIcon = {
  UserData: any;
  UserDataLoading: boolean;
};
