import React, { ReactNode } from "react";
import styled from "styled-components";
import WH100per, {
  H100per,
} from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "./Avatar";

const BusinessCardContainer = styled.div`
  display: flex;
  position: relative;
  padding: 7px;
  margin: 3px 0 0 3px;
  &:hover {
    box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    & > .CardControl {
      opacity: 1;
    }
  }
`;
const AreaDivision = styled.div`
  display: grid;
  grid-template-rows: 1fr 25px;
  width: 300px;
  height: 175px;
`;
interface BgImgProp {
  url: string;
}
const BgImg = styled(WH100per)<BgImgProp>`
  background-color: #dfe6e9;
  background-image: url(${(p: any) => p.url});
  background-size: cover;
  background-position: center center;
`;
const RestUnder = styled(WH100per)`
  display: flex;
  padding: 0 0 0 5px;
`;
const AvatarZone = styled(H100per)`
  display: flex;
  align-items: flex-end;
`;
const UsernameZone = styled(H100per)`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  padding: 0 0 0 8px;
`;
const ControlShow = styled(WH100per)`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(223, 230, 233, 0.6);
  opacity: 0;
`;

const BusinessCard = ({ children, user_data }: BusinessCardProps) => {
  return (
    <BusinessCardContainer>
      <AreaDivision>
        <BgImg url={user_data.back_img} />
        <RestUnder>
          <AvatarZone>
            <Avatar url={user_data.avatar} size={105} />
          </AvatarZone>
          <UsernameZone>{user_data.username}</UsernameZone>
        </RestUnder>
      </AreaDivision>
      {true && <ControlShow className="CardControl">{children}</ControlShow>}
    </BusinessCardContainer>
  );
};

interface BusinessCardProps {
  children?: ReactNode;
  user_data: {
    user_id: string;
    back_img: string;
    avatar: string;
    username: string;
  };
}

export default React.memo(BusinessCard);
