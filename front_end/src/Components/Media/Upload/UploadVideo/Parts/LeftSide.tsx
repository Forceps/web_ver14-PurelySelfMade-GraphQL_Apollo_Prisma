import React, { ChangeEvent, MouseEvent } from "react";
import styled, { css } from "styled-components";
import WH100per, {
  H100per,
  W100per,
  WH100perInput,
  WH100perI,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import IncludeScrollBar from "../../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import { byteUnitConversion } from "../../../../../GlobalLib/RecycleFunction/etc/Math/Arithmetic";
import { totalVolum } from "../../MediaUploadLib";

const Left = styled(H100per)`
  display: grid;
  width: 200px;
  grid-template-rows: 127px 1fr;
  padding: 10px;
  background-color: #dfe6e9;
`;
const Sbj = styled.div`
  display: flex;
  width: calc(100% - 10px);
  margin-top: 0px;
  height: 40px;
  font-size: 1.3rem;
  align-items: center;
`;
const SearchUsersLocal = styled(W100per)`
  display: flex;
  position: relative;
  height: 40px;
  margin-top: 40px;
  background-color: #b2bec3;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;
  &:hover {
    background-color: #636e72;
    color: white;
  }
`;
const AddToList = styled(SearchUsersLocal)`
  margin-top: 10px;
  color: white;
  background-color: #636e72;
  cursor: pointer;
`;
const Input = styled(WH100perInput)`
  display: inline-block;
  position: absolute;
  border: 0;
  top: 0;
  left: 0;
  font-size: 1rem;
  opacity: 0;
  outline-style: none;
`;
const FileSearchI = styled(WH100perI)`
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
`;
interface EachFNameProps {
  num: number;
  SelectedNum?: number;
}
const EachFName = styled.div<EachFNameProps>`
  display: grid;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  min-height: 35px;
  word-break: break-all;
  overflow: hidden;
  ${(prop) => {
    if (
      (prop.SelectedNum || prop.SelectedNum === 0) &&
      prop.num === prop.SelectedNum
    ) {
      return css`
        border-left: 5px solid #636e72;
        padding: 2px 10px 2px 5px;
      `;
    } else {
      return css`
        padding: 2px 10px 2px 10px;
      `;
    }
  }}
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;
const ListCon = styled(IncludeScrollBar)`
  width: 100%;
  max-height: calc(100% - 50px);
  overflow: auto;
`;
const FluidUnder = styled(WH100per)`
  overflow: hidden;
`;
const TTSize = styled.div`
  position: absolute;
  top: 57px;
  left: 10px;
  width: 180px;
`;
const TTbytes = styled(W100per)``;

export default ({
  FileName,
  SelectedFileNamesProcessing,
  handleSubmit,
  ImSelected,
  fileDetailShow,
  Selected,
  files,
}: UploadImagePreLeftSideProps) => {
  return (
    <Left>
      <div>
        <Sbj>Video upload</Sbj>
        {Selected && (
          <TTSize>
            Total size: {byteUnitConversion(totalVolum(files))}
            <TTbytes>({totalVolum(files)} bytes)</TTbytes>
          </TTSize>
        )}
        <SearchUsersLocal>
          <FileSearchI className="icon-search" />
          <Input
            type="file"
            onChange={(e) => {
              SelectedFileNamesProcessing(e);
            }}
            multiple
            accept="video/*, .ogg"
          />
        </SearchUsersLocal>
      </div>
      {Selected && (
        <FluidUnder>
          <ListCon>
            {FileName?.map((item: any) => (
              <EachFName
                key={item[0]}
                onMouseDown={(e: any) => {
                  fileDetailShow(e, item[0]);
                }}
                SelectedNum={ImSelected?.num}
                num={item[0]}
              >
                {item[1]}
              </EachFName>
            ))}
          </ListCon>
          <AddToList
            onClick={(e: any) => {
              handleSubmit(e);
            }}
          >
            <i className="icon-upload" />
          </AddToList>
        </FluidUnder>
      )}
    </Left>
  );
};
interface UploadImagePreLeftSideProps {
  FileName: any;
  SelectedFileNamesProcessing: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  ImSelected: any;
  fileDetailShow: (
    e: MouseEvent<HTMLDivElement, MouseEvent>,
    fewthOrder: number
  ) => void;
  Selected: boolean;
  files: any;
}
