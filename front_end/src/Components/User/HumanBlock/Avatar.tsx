import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { W100per } from "../../../GlobalLib/Styles/IteratePattern/WH100per";

interface DaConProp {
  size: number;
}
const DACon = styled(({ size, ...rest }) => <Link {...rest} />)<DaConProp>`
  width: ${(p) => `${p.size}px`};
  height: ${(p) => `${p.size}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(p) => `${p.size / 1.5}px`};
  background-color: #dfe6e9;
  position: relative;
`;
const DefaultAvatar = styled.i<DaConProp>`
  display: grid;
  padding: 0;
  margin-top: ${(p) => `${p.size / 10}px`};
  color: black;
`;

interface ContainerProps {
  url: string;
  size: number;
}
const Container = styled(DACon)<ContainerProps>`
  width: ${(p) => `${p.size}px`};
  height: ${(p) => `${p.size}px`};
  background-image: url(${(p) => p.url});
  background-size: cover;
  background-position: center center;
`;
interface NameProps {
  size: number;
}
const Name = styled(W100per)<NameProps>`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: ${(p) => p.size / 5}px;
  padding: 0 4% 0 4%;
  font-size: ${(p) => p.size / 8.2}px;
  position: absolute;
  align-self: flex-end;
  background-color: rgba(223, 230, 233, 0.6);
  color: black;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

interface AvatarProps {
  url?: string;
  size?: number;
  link?: string;
  func?: () => any;
  name?: string;
}
export default ({ size = 100, url, link, func, name }: AvatarProps) => {
  return url ? (
    <Container
      onClick={(e: any) => {
        e.stopPropagation();
        !link && e.preventDefault();
        func && func();
      }}
      url={url}
      size={size}
      to={link ? link : `/`}
    >
      {name && <Name size={size}>{name}</Name>}
    </Container>
  ) : (
    <DACon
      onClick={(e: any) => {
        e.stopPropagation();
        !link && e.preventDefault();
        func && func();
      }}
      size={size}
      to={link ? link : `/`}
    >
      <DefaultAvatar className="icon-noun_user_856030" size={size} />
      {name && <Name size={size}>{name}</Name>}
    </DACon>
  );
};
