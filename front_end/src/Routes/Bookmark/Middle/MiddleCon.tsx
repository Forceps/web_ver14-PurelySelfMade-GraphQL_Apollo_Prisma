import React from "react";
import styled from "styled-components";
import PostTimelineCon from "./PostTimeline/PostTimelineCon";
import { W100per } from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useSearchUser } from "../../../GlobalLib/Context/UserContext/SearchUser";
import SearchedUser from "./SearchedUser/SearchedUserCon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: calc(50vw - 550px + 190px);
  width: 600px;
  z-index: 0;
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
          <PostTimelineCon />
        </>
      ) : (
        <>
          <SmallTitle>New</SmallTitle>
          <PostTimelineCon />
        </>
      )}
    </Wrapper>
  );
};

interface MiddleConProps {
  SeeMode: string;
}
