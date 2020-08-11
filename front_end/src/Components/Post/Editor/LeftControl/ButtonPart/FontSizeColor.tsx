import React, { useState } from "react";
import styled from "styled-components";
import { Operation } from "../../EditorLib";
import { SetOfBtn, EdBtn3 } from "./GenControls";
import WH100per, {
  W100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { S_N_to_N } from "../../../../../GlobalLib/RecycleFunction/etc/type_convert";

const FontSizeContainer = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  text-align: center;
  align-items: center;
  font-size: 1rem;
  height: 35px;
`;
const FsContainer = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FsS = styled(WH100per)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 0 0 10px;
`;
const FontSizeInput = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  border-radius: 0;
  background-color: transparent;
  width: 22px;
  height: 28px;
  padding: 0 0 0 7px;
  font-size: 0.9rem;
`;
const FsModulate = styled.i`
  cursor: pointer;
`;

export default () => {
  const [FontSize, setFontSize] = useState(3);
  return (
    <SetOfBtn>
      {[
        ["strikeThrough", <i className="icon-strike" />],
        ["italic", <i className="icon-underline" />],
        ["underline", <i className="icon-underline" />],
      ]?.map((iT: any[]) => (
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
          <FsModulate
            className="icon-left-dir"
            onMouseDown={async (e) => {
              setFontSize((p) => p - 1);
              await Operation(e, "fontSize", FontSize);
            }}
          />
          <FontSizeInput
            type="number"
            min="0"
            max="7"
            value={FontSize}
            onChange={async (e) => {
              const inputted = S_N_to_N(e.target.value);
              setFontSize(inputted);
              Operation(e, "fontSize", inputted);
            }}
          />
          <FsModulate
            className="icon-right-dir"
            onMouseDown={async (e) => {
              setFontSize((p) => p + 1);
              await Operation(e, "fontSize", FontSize);
            }}
          />
        </FsContainer>
      </FontSizeContainer>
    </SetOfBtn>
  );
};

interface FontSizeColorProps {}
