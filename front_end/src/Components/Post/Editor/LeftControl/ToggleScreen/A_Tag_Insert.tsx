import React, { useEffect } from "react";
import styled from "styled-components";
import TemporaryBackground from "../../../../ElementEtc/Effect/TemporaryBackground";
import { restoreSelection } from "../../EditorLib";
import { AnchorInsert } from "../LeftControlLib";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const Consol = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  position: fixed;
  top: 30vh;
  width: 400px;
  height: 270px;
  padding: 30px;
  background-color: white;
  z-index: 24;
`;
const Text = styled.div`
  display: grid;
  text-align: center;
  font-size: 1.5rem;
  width: 100%;
  padding: 10px;
  margin-top: 22px;
`;
const IURapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 47px;
  margin-top: 53px;
`;
const Input = styled.input`
  display: grid;
  width: 100%;
  height: 35px;
  padding: 4px;
  border: 0;
  border-bottom: 1px solid #2d3436;
  font-size: 1rem;
`;
const Submit = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  background-color: #2d3436;
  color: white;
  user-select: none;
  font-size: 0.9rem;
  &:hover {
    background-color: #636e72;
  }
  cursor: pointer;
`;

type AnchorURL = {
  setAnchorInputOpen: any;
  URLText: any;
  CaretLocation: any;
};
export default ({ setAnchorInputOpen, URLText, CaretLocation }: AnchorURL) => {
  useEffect(() => {
    document.getElementById("Anchor_insert_screen")?.focus();
  }, []);
  return (
    <>
      <TemporaryBackground
        zIndex={20}
        onClick={(e: any) => {
          spaped(e);
          setAnchorInputOpen(false);
        }}
      />
      <Consol>
        <Text>URL Link</Text>
        <IURapper>
          <Input
            type="text"
            id="Anchor_insert_screen"
            placeholder="Paste"
            {...URLText}
          />
          <Submit
            onClick={async (e) => {
              spaped(e);
              await restoreSelection(CaretLocation.current);
              await AnchorInsert(
                URLText.value,
                CaretLocation.current.toString()
              );
              setAnchorInputOpen(false);
            }}
          >
            input
          </Submit>
        </IURapper>
      </Consol>
    </>
  );
};
