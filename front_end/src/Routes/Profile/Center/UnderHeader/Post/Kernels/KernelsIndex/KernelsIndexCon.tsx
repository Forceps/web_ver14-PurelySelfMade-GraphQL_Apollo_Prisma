import React from "react";
import KernelsIndexPre from "./KernelsIndexPre";

export default ({ UserData, UserDataLoading }: LSIcon) => {
  return (
    <KernelsIndexPre UserData={UserData} UserDataLoading={UserDataLoading} />
  );
};

type LSIcon = {
  UserData: any;
  UserDataLoading: boolean;
};
