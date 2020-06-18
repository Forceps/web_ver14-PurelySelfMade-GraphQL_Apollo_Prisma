import React from "react";
import styled from "styled-components";
import { useDirMode } from "../../../../../GlobalLib/Context/ProfileContext/DirMode";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Folder = styled.div`
  padding: 10px;
  width: 100%;
  font-size: 1rem;
  &:hover {
    background-color: rgba(178, 190, 195, 0.3);
  }
  cursor: pointer;
`;
const FolderIcon = styled.i`
  margin: 0 5px 0 0;
`;

type DirListProps = {
  UDirObj?: any;
};
export default ({ UDirObj }: DirListProps) => {
  const DC = useDirMode();
  return (
    <Wrapper>
      {DC.DirData?.directory?.map((dir: any) => (
        <div key={dir.directory_id}>
          {(!UDirObj || UDirObj.directory_id !== dir.directory_id) && (
            <Folder
              onClick={(e: any) => {
                spaped(e);
                DC.setLocation(parseInt(dir.directory_id));
              }}
            >
              <FolderIcon className="icon-folder" />
              {dir.name}
            </Folder>
          )}
        </div>
      ))}
    </Wrapper>
  );
};
