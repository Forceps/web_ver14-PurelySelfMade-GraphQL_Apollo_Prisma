import React from "react";
import styled from "styled-components";
import { Operation } from "../../EditorLib";

const EdBtn = styled.div`
  display: flex;
  display: relative;
  width: 95px;
  height: 60px;
  margin: 0 5px 5px 0;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background-color: white;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;

export default () => {
  return (
    <>
      {[
        ["undo", <i className="icon-left-open" />],
        ["redo", <i className="icon-right-open" />],
        ["underline", <i className="icon-underline" />],
        ["strikeThrough", <i className="icon-strike" />],
        ["justifyLeft", <i className="icon-indent-left" />],
        ["justifyRight", <i className="icon-indent-right" />],
        ["indent", <i className="icon-indent-right-1" />],
        ["justifyCenter", <i className="icon-align-center" />],
      ]?.map((iT: any[]) => (
        <EdBtn
          key={iT[0]}
          onMouseDown={async (e) => {
            await Operation(e, iT[0]);
          }}
        >
          {iT[1]}
        </EdBtn>
      ))}
    </>
  );
};
