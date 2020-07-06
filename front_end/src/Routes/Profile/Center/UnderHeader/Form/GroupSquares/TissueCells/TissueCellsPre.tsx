import React from "react";
import styled from "styled-components";
import IncludeScrollBar from "../../../../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import WH100per, {
  H100per,
} from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Loading from "../../../../../../../Components/ElementEtc/Effect/Loading";
import { Link } from "react-router-dom";
import { url } from "../../../../../../../GlobalLib/RecycleFunction/etc/Types";

const Tissue = styled(IncludeScrollBar)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px 0 0 7px;
`;
const Cell = styled(Link)`
  display: flex;
  position: relative;
  width: 100%;
  height: 230px;
  margin: 0 0 11px 0;
  color: black;
  cursor: pointer;
`;
const DfBgImg = styled(WH100per)`
  background: linear-gradient(to right, #dfe6e9, #fafafa);
`;
const BgImg = styled(WH100per)<url>`
  background: linear-gradient(
      to left,
      rgba(250, 250, 250, 1) 0%,
      rgba(250, 250, 250, 0)
    ),
    url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
`;
const Infos = styled(WH100per)`
  display: grid;
  grid-template-columns: 280px 1fr;
  position: absolute;
  padding: 8px 0 8px 8px;
`;
const Introduce = styled(WH100per)`
  display: grid;
  grid-template-rows: 85px 1fr;
`;
const Avatar = styled(WH100per)<url>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
  /* border: 3px solid #636e72; */
`;
const UName = styled(H100per)`
  padding: 5px 0 0 11px;
  font-size: 1.4rem;
  overflow: hidden;
`;
const DACon = styled(WH100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border: 3px solid white;
  background-color: #dfe6e9;
  cursor: default;
`;
const DefaultAvatar = styled.i`
  display: grid;
  padding: 0;
`;
const UpSide = styled(WH100per)`
  display: grid;
  grid-template-columns: 85px 1fr;
`;
const PurposeBox = styled(WH100per)`
  padding: 5px 0 0 5px;
`;
const Related = styled(WH100per)``;

export default ({ data, loading }: TissueCellsPreProps) => {
  return (
    <Tissue>
      {loading ? (
        <Loading />
      ) : (
        data.seeGroups.map((item: any) => (
          <Cell key={item.group_id} to={`/group/${item.group_id}`}>
            {item.identiti_back_img ? (
              <BgImg url={item.identiti_back_img} />
            ) : (
              <DfBgImg />
            )}
            <Infos>
              <Introduce>
                <UpSide>
                  {item.identiti_profile_img ? (
                    <Avatar url={item.identiti_profile_img} />
                  ) : (
                    <DACon>
                      <DefaultAvatar className="icon-group" />
                    </DACon>
                  )}
                  <UName>{item.name}</UName>
                </UpSide>
                <PurposeBox>{item.purpose}</PurposeBox>
              </Introduce>
              <Related></Related>
            </Infos>
          </Cell>
        ))
      )}
    </Tissue>
  );
};

interface TissueCellsPreProps {
  data: any;
  loading: boolean;
}
