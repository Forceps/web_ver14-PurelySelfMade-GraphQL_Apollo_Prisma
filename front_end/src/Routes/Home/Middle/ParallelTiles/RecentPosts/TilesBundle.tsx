import React from "react";
import Tile from "../../../../../Components/Post/Shape/Tile/TileCon";
import { SeePostAllRequest } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostR";

export default ({ skip = 0, take = 10 }: TilesBundleProps) => {
  const { data, loading } = SeePostAllRequest(skip, take);

  return loading ? (
    <div />
  ) : (
    data.seePosts.map((post: any) => <Tile key={post.post_id} post={post} />)
  );
};

interface TilesBundleProps {
  skip?: number;
  take?: number;
}
