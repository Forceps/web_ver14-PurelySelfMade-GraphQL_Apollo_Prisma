import React from "react";
import styled from "styled-components/native";
import TileCon from "./Tile/TileCon";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const ScrollZone = styled.ScrollView`
  padding: 20px 0 0 0;
`;

const HomePre = ({ newPostData, newPostLoading }: HomePreProps) => {
  return (
    <View>
      {newPostLoading ? (
        <View />
      ) : (
        <ScrollZone>
          {newPostData.map((p: any) => (
            <TileCon key={p.post_id} post={p} />
          ))}
        </ScrollZone>
      )}
    </View>
  );
};

interface HomePreProps {
  newPostData: any;
  newPostLoading: boolean;
}

export default React.memo(HomePre);
