import React from "react";
import styled from "styled-components";
import { useMyInfo } from "../../../GlobalLib/Context/UserContext/Me";
import Avatar from "../../../Components/User/Avatar";
import { W100per } from "../../../GlobalLib/Styles/IteratePattern/WH100per";

const Private = styled(W100per)``;
const MyName = styled(W100per)`
  margin: 10px 0 0 0;
  font-size: 1.3rem;
`;
const Floor1 = styled(W100per)``;
const Floor2 = styled(W100per)`
  display: flex;
  flex-direction: column;
`;
const SubSbjF2 = styled(W100per)`
  display: flex;
  margin: 20px 0 0 0;
  height: 35px;
  align-items: center;
`;

export default () => {
  const me = useMyInfo();
  return (
    <Private>
      <Floor1>
        <Avatar url={me.MEdata?.avatar} size={90} />
        <MyName>{me.MEdata?.username}</MyName>
      </Floor1>
      <Floor2>
        <SubSbjF2>Connected people</SubSbjF2>
      </Floor2>
    </Private>
  );
};
