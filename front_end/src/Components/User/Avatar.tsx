import React from "react";
import styled from "styled-components";

const getSize = (size: string) => {
  let number;
  if (size === "sm") {
    number = 30;
  } else if (size === "md") {
    number = 50;
  } else if (size === "lg") {
    number = 150;
  }
  return `
    width:${number}px;
    height:${number}px;
    `;
};
interface ContainerProps {
  size: string;
  url: string;
}
const Container = styled.div<ContainerProps>`
  ${(props) => getSize(props.size)}
  background-image:url(${(props) => props.url});
  background-size:cover;
  background-position: center center;
  /* border-radius:50%; */
`;

type AvatarProps = {
  size?: string;
  url: string;
  className?: string;
};
export default ({ size = "sm", url, className }: AvatarProps) => (
  <Container className={className} size={size} url={url} />
);
