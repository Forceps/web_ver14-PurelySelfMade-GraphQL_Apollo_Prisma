import React from "react";
import styled, { css } from "styled-components";
import { Operation } from "../../EditorLib";

const HoCButn = styled.div`
  display: flex;
  flex-direction: column;
  width: 195px;
  height: 70px;
  margin: 0 5px 5px 0;
  text-align: center;
  align-items: center;
  font-size: 1rem;
  background-color: white;
`;
const HoCButn2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 195px;
  margin: 0 5px 5px 0;
  text-align: center;
  align-items: center;
  font-size: 1rem;
  background-color: white;
`;
const FsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 195px;
  font-size: 0.9rem;
`;
const FcContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 5px;
  width: 195px;
  height: 35px;
  font-size: 0.9rem;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
interface FsSProp {
  FcOpen?: boolean;
}
const FsS = styled.div<FsSProp>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 35px;
  align-items: center;
  text-align: center;
  ${(prop) => {
    if (prop.FcOpen) {
      return css`
        display: grid;
        grid-template-columns: 1fr 70px;
        margin-bottom: 10px;
      `;
    }
  }}
`;
const SelBtn = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  align-items: center;
  text-align: center;
  background-color: #dfe6e9;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;
const FsItem = styled.div`
  display: grid;
  width: 100%;
  height: 35px;
  align-items: center;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const ColorPick = styled.div`
  display: grid;
  margin-bottom: 10px;
`;
type FontSizeColorProps = {
  FcOpen: boolean;
  setFcOpen: any;
  ColorPiked: any;
};
export default ({ FcOpen, setFcOpen, ColorPiked }: FontSizeColorProps) => {
  return (
    <>
      <HoCButn>
        <FsS>font size</FsS>
        <FsContainer>
          {[1, 2, 3, 4, 5, 6, 7]?.map((i) => (
            <FsItem
              key={i}
              onMouseDown={async (e) => {
                await Operation(e, "fontSize", i);
              }}
            >
              {i}
            </FsItem>
          ))}
        </FsContainer>
      </HoCButn>
      <HoCButn2>
        <FsS FcOpen={FcOpen}>
          <div>font color</div>
          {FcOpen && (
            <SelBtn
              onMouseDown={async (e) => {
                await Operation(e, "foreColor", ColorPiked);
              }}
            >
              Select
            </SelBtn>
          )}
        </FsS>
        {FcOpen ? (
          <>
            <ColorPick className="color-picker-container" />
            <FcContainer
              onClick={() => {
                setFcOpen(false);
              }}
            >
              <i className="icon-up-open" />
            </FcContainer>
          </>
        ) : (
          <FcContainer
            onClick={() => {
              setFcOpen(true);
            }}
          >
            <i className="icon-down-open" />
          </FcContainer>
        )}
      </HoCButn2>
    </>
  );
};
