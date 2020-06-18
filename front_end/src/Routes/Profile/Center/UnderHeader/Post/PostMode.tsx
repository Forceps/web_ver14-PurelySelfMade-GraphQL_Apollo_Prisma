import React from "react";
import styled from "styled-components";
import KernelsIndexCon from "./Kernels/KernelsIndex/KernelsIndexCon";

const Under = styled.div``;

export default ({ UserData, UserDataLoading }: PostModeProps) => {
  return (
    <Under>
      <KernelsIndexCon UserData={UserData} UserDataLoading={UserDataLoading} />
    </Under>
  );
};

type PostModeProps = {
  UserData: any;
  UserDataLoading: boolean;
};
