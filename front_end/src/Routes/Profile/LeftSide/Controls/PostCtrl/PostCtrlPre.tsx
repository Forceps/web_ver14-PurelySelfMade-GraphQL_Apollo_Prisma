import React from "react";
import styled from "styled-components";
import { W100per } from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Suburb = styled(W100per)`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  padding: 30px 10px 0 10px;
`;
const AvailTotal = styled(W100per)`
  padding: 10px 0 15px 0;
`;

export default ({ data }: ArchiveCtrlPreProps) => {
  const { postCount } = data;
  return (
    <Suburb>
      <AvailTotal>
        {postCount} {"posts"}
      </AvailTotal>
    </Suburb>
  );
};

interface ArchiveCtrlPreProps {
  data: any;
}
