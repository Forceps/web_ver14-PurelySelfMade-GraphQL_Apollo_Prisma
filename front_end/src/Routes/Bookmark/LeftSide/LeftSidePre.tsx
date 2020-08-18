import React from "react";
import styled from "styled-components";
import LeftSideMenuCon from "../../../Components/ElementEtc/LeftSideMenu/LeftSideMenuCon";
import WH100per, {
  W100per,
} from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../../Components/User/Avatar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  position: absolute;
  left: calc(50vw - 555px);
  width: 190px;
  z-index: 0;
`;
const SList = styled(W100per)`
  margin: 10px 0 0 0;
`;
const Sbj = styled(W100per)`
  font-size: 1.1rem;
`;
const Blocks = styled(W100per)`
  margin: 10px 0 0 0;
`;
const AvCons = styled(W100per)`
  display: grid;
  grid-template-columns: 55px 1fr;
  margin: 5px 0 5px 0;
  padding: 0 3px 0 0;
  &:hover {
    border-right: 3px solid black;
    padding: 0 0 0 0;
  }
  cursor: pointer;
`;
const Introduce = styled(WH100per)`
  padding: 0 0 0 5px;
`;

export default ({ Isubs }: LeftSidePreProps) => {
  return (
    <Wrapper>
      <LeftSideMenuCon Bookmark={false} />
      <SList>
        <Sbj>Subscribers</Sbj>
        <Blocks>
          {Isubs.map((s: any) => (
            <AvCons>
              <Avatar size={55} url={s.avatar} />
              <Introduce>{s.username}</Introduce>
            </AvCons>
          ))}
        </Blocks>
      </SList>
    </Wrapper>
  );
};
interface LeftSidePreProps {
  Isubs: any;
}
