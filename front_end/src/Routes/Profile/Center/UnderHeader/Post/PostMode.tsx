import React from "react";
import styled from "styled-components";
import KernelsCon from "./Kernels/KernelsCon";

const Under = styled.div``;

export default ({ UserData, UserDataLoading }: PostModeProps) => {
  return (
    <Under>
      <KernelsCon UserData={UserData} UserDataLoading={UserDataLoading} />
    </Under>
  );
};

type PostModeProps = {
  UserData: any;
  UserDataLoading: boolean;
};
