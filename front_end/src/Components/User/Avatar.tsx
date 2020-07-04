import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface DaConProp {
  size: number;
}
const DACon = styled(({ ...rest }) => <Link {...rest} />)<DaConProp>`
  width: ${(p) => `${p.size}px`};
  height: ${(p) => `${p.size}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(p) => `${p.size / 1.5}px`};
  background-color: #dfe6e9;
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

interface AvatarProps {
  url?: string;
  size?: number;
  link?: string;
  func?: () => any;
}
export default ({ size = 100, url, link, func }: AvatarProps) => {
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
    />
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
    </DACon>
  );
};
