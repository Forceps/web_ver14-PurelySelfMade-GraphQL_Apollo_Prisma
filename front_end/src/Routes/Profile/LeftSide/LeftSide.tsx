import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import Identity from "./Identity/IdentityCon";
import ConnectionTile from "./Menu/ConnectionTile";
import { useBackImgInS } from "../../../GlobalLib/Context/ProfileContext/BackImgInS";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import ImgInSCon from "../../../Components/Media/Insert/ImgInsertScreen/ImgInSCon";
import { W100per } from "../../../GlobalLib/Styles/IteratePattern/WH100per";

const Den1Left = styled(W100per)`
  display: grid;
  grid-template-rows: 180px 1fr;
  @media (max-width: 1300px) {
    display: flex;
    min-width: 0;
  }
`;
const Den2Up = styled.div`
  width: 100%;
  height: 100%;
  background-color: #b2bec3;
  @media (max-width: 1300px) {
    display: none;
  }
`;
const Den2Down = styled.div`
  background-color: rgba(223, 230, 233, 0.25);
`;
interface BackImgProp {
  url: string;
}
const BackImg = styled(Den2Up)<BackImgProp>`
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
`;

export default ({ UserDataLoading, UserData }: LeftSideProps) => {
  const BII = useBackImgInS();
  const [MenuMode, setMenuMode] = useState(true);
  return (
    <>
      <Den1Left>
        {UserDataLoading || !UserData?.seeUser?.back_img ? (
          <Den2Up
            onClick={(e: any) => {
              spaped(e);
              BII.setDesignateBackImg(true);
            }}
          />
        ) : (
          <BackImg
            url={UserData?.seeUser?.back_img}
            onClick={(e: any) => {
              spaped(e);
              BII.setDesignateBackImg(true);
            }}
          />
        )}

        <Den2Down>
          <Identity
            UserDataLoading={UserDataLoading}
            UserData={UserData}
            MenuMode={MenuMode}
            setMenuMode={setMenuMode}
          />
          {MenuMode ? (
            <>
              <Menu />
              <ConnectionTile />
            </>
          ) : (
            <div />
          )}
        </Den2Down>
      </Den1Left>
      {BII.DesignateBackImg && (
        <ImgInSCon
          setImgSubMenuOp={BII.setDesignateBackImg}
          ImgInsert={BII.BackImgPathInsert}
          zIndex={30}
        />
      )}
    </>
  );
};
type LeftSideProps = {
  UserDataLoading: boolean;
  UserData: any;
};
