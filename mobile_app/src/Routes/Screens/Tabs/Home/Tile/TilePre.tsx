import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Icon from "../../../../../Components/ElementEtc/Icon";
import Avatar from "../../../../../Components/User/Avatar";
import { makeBackEndReceiveCompatible } from "../../../../../GlobalLib/Apollo/apolloSetting/BackendWay";
import constants from "../../../../../GlobalLib/Styles/IteratePattern/constants";
import WH100per, {
  W100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";

interface zindexProp {
  zIndex: number;
}
const Wrapper = styled.View<zindexProp>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${constants.width}px;
  height: ${constants.width}px;
  margin: 10px 0 0 0;
  z-index: ${(p) => p.zIndex};
`;
const MiniProfile = styled(W100per)`
  display: flex;
  flex-direction: row;
  height: 40px;
`;
const UName = styled(W100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 7px;
`;
const PostHeader = styled(W100per)`
  display: flex;
  height: ${constants.width - 90};
`;
const Title = styled.Text`
  color: white;
  font-size: 16px;
`;
const AdditionalInfo = styled.Text`
  height: 30px;
  color: white;
`;
const TitleImage = styled.ImageBackground`
  width: ${constants.width}px;
  height: ${constants.width}px;
`;
const TitleImgSubstitude = styled.Text``;
const Capsel = styled(WH100per)`
  display: flex;
  padding: 35px 0 0 3px;
  background-color: rgba(45, 52, 54, 0.17);
`;
const Menifesting = styled(WH100per)`
  display: flex;
  position: absolute;
  padding: 10px;
  color: white;
`;

export default ({ post, zIndex }: EachPostProps) => {
  const {
    caption,
    views,
    likes,
    user_postTouser: { avatar, username },
    face,
    face_type,
  } = post;
  return (
    <Wrapper zIndex={zIndex}>
      {face_type !== "image" ? (
        <Capsel>
          <TitleImgSubstitude>{face}</TitleImgSubstitude>
        </Capsel>
      ) : (
        <TitleImage source={{ uri: makeBackEndReceiveCompatible(face) }} />
      )}

      <Menifesting>
        <PostHeader>
          <Title>{caption}</Title>
        </PostHeader>
        <AdditionalInfo>
          <Icon name="eye" kind="FontAwesome5" /> {views}
          <Icon name="heart-o" kind="FontAwesome" /> {likes}
        </AdditionalInfo>
        <MiniProfile>
          <Avatar url={avatar} size={40} />
          <UName>
            <Text>{username}</Text>
          </UName>
        </MiniProfile>
      </Menifesting>
    </Wrapper>
  );
};

interface EachPostProps {
  post: any;
  zIndex: number;
}
