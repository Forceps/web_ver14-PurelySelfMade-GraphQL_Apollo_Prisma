import React from "react";
import styled from "styled-components";
import { W100per } from "../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../Components/User/Avatar";
import { useMyInfo } from "../../GlobalLib/Context/UserContext/Me";
import Loading from "../../Components/Effect/Loading";

const Invest = styled(W100per)`
  display: grid;
  grid-template-columns: 100px 1fr;
`;
const Center = styled(W100per)`
  display: grid;
  grid-template-rows: 60px 1fr;
  min-height: 100px;
`;
const Main = styled(W100per)`
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100px;
  background-color: pink;
`;
const Private = styled(W100per)`
  background-color: powderblue;
`;
const Rooms = styled(W100per)``;
const MyName = styled(W100per)`
  margin: 10px 0 0 0;
  font-size: 1.3rem;
`;
const Sbj = styled(W100per)`
  font-size: 1.4rem;
`;
const Exhibit = styled(W100per)`
  margin: 10px 0 0 0;
`;

export default ({ srLoading, srData }: ChatPreProps) => {
  const me = useMyInfo();
  return (
    <Invest>
      <div />
      <Center>
        <div />
        <Main>
          <Private>
            <Avatar url={me.MEdata?.avatar} size={90} />
            <MyName>{me.MEdata?.username}</MyName>
          </Private>
          <Rooms>
            <Sbj>Chat rooms</Sbj>
            <Exhibit>{srLoading ? <Loading /> : <div />}</Exhibit>
          </Rooms>
        </Main>
      </Center>
    </Invest>
  );
};
interface ChatPreProps {
  srLoading: boolean;
  srData: any;
}
