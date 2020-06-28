import React from "react";
import styled from "styled-components";
import ParallelTilesCon from "./ParallelTiles/ParallelTilesCon";
import { W100per } from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useSearchUser } from "../../../GlobalLib/Context/UserContext/SearchUser";
import SearchedUser from "./SearchedUser/SearchedUserCon";

const Wrapper = styled(W100per)`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  min-height: 92vh;
`;
const SmallTitle = styled(W100per)`
  display: grid;
  align-items: center;
  padding: 14px 0 0 10px;
  font-size: 1.3rem;
`;
const SmallerTitle = styled(W100per)`
  display: grid;
  align-items: center;
  padding: 14px 0 0 10px;
  font-size: 1.1rem;
`;

export default ({ SeeMode }: MiddleConProps) => {
  const SU = useSearchUser();
  return (
    <Wrapper>
      {SeeMode === "Search" && SU.called ? (
        <>
          <SmallTitle>Search</SmallTitle>
          <SmallerTitle>User</SmallerTitle>
          <SearchedUser />
          <SmallerTitle>Post</SmallerTitle>
          <ParallelTilesCon />
        </>
      ) : (
        <>
          <SmallTitle>New</SmallTitle>
          <ParallelTilesCon />
        </>
      )}
    </Wrapper>
  );
};

interface MiddleConProps {
  SeeMode: string;
}
