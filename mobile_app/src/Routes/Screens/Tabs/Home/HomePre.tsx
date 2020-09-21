import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import TileCon from "./Tile/TileCon";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const HomePre = ({ newPostData, newPostLoading }: HomePreProps) => {
  return (
    <View>
      {newPostLoading ? (
        <View />
      ) : (
        <ScrollView>
          {newPostData.map((p: any) => (
            <TileCon key={p.post_id} post={p} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

interface HomePreProps {
  newPostData: any;
  newPostLoading: boolean;
}

export default React.memo(HomePre);
