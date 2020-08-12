import React from "react";
import styled from "styled-components";
import { Operation } from "../../EditorLib";

const EdBtn = styled.div`
  display: flex;
  height: 60px;
  margin: 0 5px 5px 0;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
export const EdBtn2 = styled(EdBtn)`
  width: calc(100% / 2 - 5px);
`;
export const SetOfBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 5px);
  margin: 0 5px 5px 0;
  background-color: #fafafa;
`;
export const EdBtn2dot2 = styled(EdBtn)`
  margin: 0;
  width: calc(100% / 2);
  height: 50px;
`;
export const EdBtn3 = styled(EdBtn)`
  margin: 0;
  width: calc(100% / 3);
  height: 50px;
`;

export default () => {
  return (
    <>
      {[
        ["undo", <i className="icon-left-open" />],
        ["redo", <i className="icon-right-open" />],
      ].map((iT: any[]) => (
        <EdBtn2
          key={iT[0]}
          onMouseDown={async (e) => {
            await Operation(e, iT[0]);
          }}
        >
          {iT[1]}
        </EdBtn2>
      ))}
      <SetOfBtn>
        {[
          ["justifyLeft", <i className="icon-indent-left" />],
          ["justifyCenter", <i className="icon-align-center" />],
          ["justifyRight", <i className="icon-indent-right" />],
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
        {[
          ["outdent", <i className="icon-indent-left-1" />],
          ["indent", <i className="icon-indent-right-1" />],
        ].map((iT: any[]) => (
          <EdBtn2dot2
            key={iT[0]}
            onMouseDown={async (e) => {
              await Operation(e, iT[0]);
            }}
          >
            {iT[1]}
          </EdBtn2dot2>
        ))}
      </SetOfBtn>
    </>
  );
};
