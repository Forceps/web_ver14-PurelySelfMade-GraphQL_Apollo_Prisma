import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { makeBackEndReceiveCompatible } from "../../GlobalLib/Apollo/apolloSetting/BackendWay";
import Icon from "../ElementEtc/Icon";

interface DaConProp {
  size: number;
}
const DACon = styled.View<DaConProp>`
  width: ${(p) => `${p.size}px`};
  height: ${(p) => `${p.size}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dfe6e9;
  position: relative;
`;

interface ContainerProps {
  source: string;
  size: number;
}
const Container = styled(({ size, ...rest }) => <ImageBackground {...rest} />)<
  ContainerProps
>`
  width: ${(p) => `${p.size}px`};
  height: ${(p) => `${p.size}px`};
  position: relative;
`;

interface AvatarProps {
  url?: string;
  size?: number;
}
export default ({ size = 100, url }: AvatarProps) => {
  return url ? (
    <Container
      source={{ uri: makeBackEndReceiveCompatible(url) }}
      size={size}
    />
  ) : (
    <DACon size={size}>
      <Icon name="user" size={size} kind="AntDesign" />
    </DACon>
  );
};
