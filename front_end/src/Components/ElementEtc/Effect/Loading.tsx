import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import WH100per from "../../../GlobalLib/Styles/IteratePattern/WH100per";

interface AppearDelay {
  AppearDelay: boolean;
}
const Wrapper = styled(WH100per)<AppearDelay>`
  display: ${(prop) => (prop.AppearDelay ? "none" : "inline-block")};
  padding: 15px;
`;
interface IconSize {
  size: number;
}
const Icon = styled.div<IconSize>`
  display: flex;
  flex-wrap: wrap;
  height: ${(prop) => prop.size}px;
  width: ${(prop) => prop.size}px;
  margin-bottom: 15px;
`;
const rotate1To3 = keyframes`
  from{
    transform-origin: bottom;
    transform: perspective(230) rotateX(0deg);
    opa
  }to{
    transform-origin: bottom;
    transform: perspective(230) rotateX(-180deg);
  }
`;
const rotate3To4 = keyframes`
  from{
    transform-origin: right;
    transform: perspective(230) rotateY(0deg);
    opa
  }to{
    transform-origin: right;
    transform: perspective(230) rotateY(-180deg);
  }
`;
const rotate4To2 = keyframes`
  from{
    transform-origin: top;
    transform: perspective(230) rotateX(0deg);
    opa
  }to{
    transform-origin: top;
    transform: perspective(230) rotateX(-180deg);
  }
`;
const rotate2To1 = keyframes`
  from{
    transform-origin: left;
    transform: perspective(230) rotateY(0deg);
    opa
  }to{
    transform-origin: left;
    transform: perspective(230) rotateY(-180deg);
  }
`;
interface Phase {
  Phase: number;
}
const MovingItem1 = styled.div<Phase>`
  display: block;
  height: 50%;
  width: 50%;
  ${(prop) => {
    if (prop.Phase === 1) {
      return css`
        background-color: #636e72;
        animation: ${rotate1To3} 1.4s linear 0s infinite alternate forwards;
      `;
    } else if (prop.Phase === 3) {
      return css`
        background-color: #636e72;
        animation: ${rotate1To3} 1.4s linear 0s infinite alternate forwards;
      `;
    }
  }}
`;
const MovingItem2 = styled.div<Phase>`
  display: block;
  height: 50%;
  width: 50%;
  ${(prop) => {
    if (prop.Phase === 2) {
      return css`
        background-color: #636e72;
        animation: ${rotate2To1} 1.4s linear 0s infinite alternate forwards;
      `;
    } else if (prop.Phase === 4) {
      return css`
        background-color: #636e72;
        animation: ${rotate2To1} 1.4s linear 0s infinite alternate forwards;
      `;
    }
  }}
`;
const MovingItem3 = styled.div<Phase>`
  display: block;
  height: 50%;
  width: 50%;
  ${(prop) => {
    if (prop.Phase === 2) {
      return css`
        background-color: #636e72;
        animation: ${rotate3To4} 1.4s linear 0s infinite alternate forwards;
      `;
    } else if (prop.Phase === 4) {
      return css`
        background-color: #636e72;
        animation: ${rotate3To4} 1.4s linear 0s infinite alternate forwards;
      `;
    }
  }}
`;
const MovingItem4 = styled.div<Phase>`
  display: block;
  height: 50%;
  width: 50%;
  ${(prop) => {
    if (prop.Phase === 1) {
      return css`
        background-color: #636e72;
        animation: ${rotate4To2} 1.4s linear 0s infinite alternate forwards;
      `;
    } else if (prop.Phase === 3) {
      return css`
        background-color: #636e72;
        animation: ${rotate4To2} 1.4s linear 0s infinite alternate forwards;
      `;
    }
  }}
`;
const LoadingText = styled.div`
  display: grid;
  font-size: 20px;
`;

type LoadingIconProps = {
  size?: number;
};
export const LoadingIcon = ({ size = 80 }: LoadingIconProps) => {
  const [Phase, setPhase] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      if (Phase === 4) {
        setPhase(Phase - 3);
      } else if (Phase < 4) {
        setPhase(Phase + 1);
      }
    }, 1400);
  }, [Phase]);
  return (
    <Icon size={size}>
      <MovingItem1 Phase={Phase} />
      <MovingItem2 Phase={Phase} />
      <MovingItem3 Phase={Phase} />
      <MovingItem4 Phase={Phase} />
    </Icon>
  );
};
export default () => {
  const [AppearDelay, setAppearDelay] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAppearDelay(false);
    }, 1400);
  }, []);
  return (
    <Wrapper AppearDelay={AppearDelay}>
      <LoadingIcon />
      <LoadingText>Loading...</LoadingText>
    </Wrapper>
  );
};
