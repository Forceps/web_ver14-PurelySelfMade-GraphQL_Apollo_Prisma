import React from "react";
import styled from "styled-components";
import TemporaryBackground from "../../ElementEtc/Effect/TemporaryBackground";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import WH100per from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import IncludeScrollBar from "../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import Loading from "../../ElementEtc/Effect/Loading";

interface WrapperProps {
  zIndex: number;
}
const Wrapper = styled(WH100per)<WrapperProps>`
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: ${(prop) => prop.zIndex};
`;
const Template = styled(IncludeScrollBar)<WrapperProps>`
  position: relative;
  width: 600px;
  height: 70vh;
  min-height: 600px;
  background-color: #fafafa;
  overflow: auto;
  z-index: ${(prop) => prop.zIndex};
  display: grid;
  grid-template-rows: 40px 1fr;
`;
const Title = styled(WH100per)`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  padding: 0 0 0 10px;
`;
const Contents = styled(IncludeScrollBar)`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  padding: 10px;
`;

export default ({
  zIndex,
  setNotificationDetailOpen,
  loading,
  data,
}: NotificationDetailPreProps) => {
  return (
    <Wrapper zIndex={zIndex}>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          setNotificationDetailOpen(false);
        }}
        zIndex={zIndex + 1}
      />
      <Template zIndex={zIndex + 2}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Title>{data.title}</Title>
            <Contents>{data.content}</Contents>
          </>
        )}
      </Template>
    </Wrapper>
  );
};
interface NotificationDetailPreProps {
  zIndex: number;
  setNotificationDetailOpen: any;
  loading: boolean;
  data: any;
}
