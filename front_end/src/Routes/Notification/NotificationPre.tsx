import React from "react";
import styled from "styled-components";
import { W100per } from "../../GlobalLib/Styles/IteratePattern/WH100per";
import DataSpreadCon from "./DataSpread/DataSpreadCon";
import LeftSideMenuCon from "../../Components/ElementEtc/LeftSideMenu/LeftSideMenuCon";

const Packing = styled(W100per)`
  display: grid;
  grid-template-columns: 240px 1fr;
`;
const NonPop = styled(W100per)`
  display: flex;
  min-height: 100px;
  padding: 30px 0 0 0;
`;

export default () => {
  return (
    <Packing>
      <LeftSideMenuCon />
      <NonPop>
        <DataSpreadCon />
      </NonPop>
    </Packing>
  );
};
