import React from "react";
import styled from "styled-components";
import { Operation } from "../../EditorLib";
import { SetOfBtn, EdBtn3 } from "./GenControls";
import WH100per, {
  W100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const FontSizeContainer = styled(W100per)`
  display: grid;
  grid-template-columns: 30px 1fr;
  text-align: center;
  align-items: center;
  font-size: 1rem;
  height: 35px;
`;
const FsContainer = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;
const FsS = styled(WH100per)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const SizeSpec = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;

const FontSizeColor = () => {
  return (
    <SetOfBtn>
      {[
        ["strikeThrough", <i className="icon-strike" />],
        ["italic", <i className="icon-underline" />],
        ["underline", <i className="icon-underline" />],
      ].map((iT: any[]) => (
        <EdBtn3
          key={iT[0]}
          onMouseDown={async (e) => {
            await Operation(e, iT[0]);
          }}
        >
          {iT[1]}
        </EdBtn3>
      ))}
      <FontSizeContainer>
        <FsS>
          <i className="icon-fontsize" />
        </FsS>
        <FsContainer>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <SizeSpec
              onMouseDown={async (e) => {
                await Operation(e, "fontSize", i);
              }}
            >
              {i}
            </SizeSpec>
          ))}
        </FsContainer>
      </FontSizeContainer>
    </SetOfBtn>
  );
};

interface FontSizeColorProps {}

export default React.memo(FontSizeColor);
