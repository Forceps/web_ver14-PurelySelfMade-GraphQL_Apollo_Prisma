import React from "react";
import styled, { css } from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import TemporaryBackground from "../../../../../../../Components/ElementEtc/Effect/TemporaryBackground";
import { spaped } from "../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useInputReturn } from "../../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { NOrU } from "../../../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import InstantMessage from "../../../../../../../GlobalLib/Context/EtcContext/ShortMessage/InstantMessage/InstantMessageCon";

interface EncompassProps {
  zIndex: number;
}
const Encompass = styled(WH100per)<EncompassProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(p) => p.zIndex};
`;
const Consol = styled.div<EncompassProps>`
  display: grid;
  grid-template-rows: 40px 1fr 40px;
  width: 400px;
  min-height: 550px;
  padding: 10px;
  background-color: #fafafa;
  z-index: ${(p) => p.zIndex};
`;
const Sbj = styled(WH100per)`
  font-size: 1.2rem;
`;
const Decision = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
`;
const BtnGen = styled.button`
  display: flex;
  width: 70px;
  height: 100%;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-size: 0.9rem;
  outline-style: none;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const Submit = styled(BtnGen)`
  background-color: #2d3436;
  color: white;
  border: 0;
  &:hover {
    background-color: #636e72;
  }
`;
const Intent = styled(WH100per)`
  display: grid;
  grid-template-rows: 1fr 1fr 1.7fr;
  padding: 10px 0 10px 5px;
`;
const EmailEdit = styled(WH100per)`
  display: flex;
  align-items: center;
`;
const PasswordEdit = styled(WH100per)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
interface EditTxtInputProps {
  CurPwConfirmed?: boolean;
  reverse?: boolean;
}
const EditTxtInput = styled.input<EditTxtInputProps>`
  padding: 5px;
  font-size: 1rem;
  border: 0;
  border-bottom: 1px solid #2d3436;
  background-color: transparent;
  width: 280px;
  margin: 5px 0 5px 0;
  ${(p) => {
    const bool = !NOrU(p.CurPwConfirmed) && !p.CurPwConfirmed;
    if (p.reverse ? !bool : bool) {
      return css`
        border-bottom: 0;
        border-left: 3px solid #2d3436;
      `;
    }
  }}
`;
const Entrance = styled(WH100per)`
  display: grid;
  grid-template-columns: 8fr 2fr;
`;
const EntInputZone = styled(WH100per)`
  display: flex;
  align-items: center;
`;
const EntBtnZone = styled(WH100per)`
  display: flex;
  align-items: center;
`;
interface CheckEntPasswordBtnProps {
  CurPwConfirmed: boolean;
}
const CheckEntPasswordBtn = styled(W100per)<CheckEntPasswordBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background-color: #636e72;
  color: white;
  ${(p) => {
    if (!p.CurPwConfirmed) {
      return css`
        &:hover {
          background-color: #2d3436;
        }
        cursor: pointer;
      `;
    }
  }}
`;

const AccountEditPre = ({
  setAccountEditOpen,
  zIndex,
  EnPasswordStr,
  emailStr,
  passwordStr,
  password2Str,
  CurPwConfirmed,
  setCurPwConfirmed,
  currntPasswordConfirm,
}: AccountEditProps) => {
  return (
    <Encompass zIndex={zIndex}>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          setCurPwConfirmed(false);
          setAccountEditOpen(false);
        }}
        zIndex={zIndex + 1}
      />
      <Consol zIndex={zIndex + 2}>
        <Sbj>Account edit</Sbj>
        <Intent>
          <Entrance>
            <EntInputZone>
              <EditTxtInput
                type="password"
                placeholder="current password"
                spellCheck="false"
                {...EnPasswordStr}
                readOnly={CurPwConfirmed}
                CurPwConfirmed={CurPwConfirmed}
                reverse={true}
              />
            </EntInputZone>
            <EntBtnZone>
              <CheckEntPasswordBtn
                onClick={(e) => {
                  spaped(e);
                  currntPasswordConfirm();
                }}
                CurPwConfirmed={CurPwConfirmed}
              >
                Confirm
              </CheckEntPasswordBtn>
              <InstantMessage
                Subject="Current password"
                Message="Current password is incorrect. Please try again"
              />
            </EntBtnZone>
          </Entrance>
          <EmailEdit>
            <EditTxtInput
              type="text"
              placeholder="email"
              spellCheck="false"
              {...emailStr}
              readOnly={!CurPwConfirmed}
              CurPwConfirmed={CurPwConfirmed}
            />
          </EmailEdit>
          <PasswordEdit>
            <EditTxtInput
              type="password"
              placeholder="new password"
              spellCheck="false"
              {...passwordStr}
              readOnly={!CurPwConfirmed}
              CurPwConfirmed={CurPwConfirmed}
            />
            <EditTxtInput
              type="password"
              placeholder="confirm password"
              spellCheck="false"
              {...password2Str}
              readOnly={!CurPwConfirmed}
              CurPwConfirmed={CurPwConfirmed}
            />
          </PasswordEdit>
        </Intent>
        <Decision>
          <Submit
            onClick={(e) => {
              spaped(e);
              if (CurPwConfirmed) {
                setAccountEditOpen(false);
              }
              setCurPwConfirmed(false);
            }}
          >
            Save
          </Submit>
          <BtnGen
            onClick={(e) => {
              spaped(e);
              setCurPwConfirmed(false);
              setAccountEditOpen(false);
            }}
          >
            Cancel
          </BtnGen>
        </Decision>
      </Consol>
    </Encompass>
  );
};
interface AccountEditProps {
  setAccountEditOpen: any;
  zIndex: number;
  EnPasswordStr: useInputReturn;
  emailStr: useInputReturn;
  passwordStr: useInputReturn;
  password2Str: useInputReturn;
  CurPwConfirmed: boolean;
  setCurPwConfirmed: any;
  currntPasswordConfirm: () => void;
}

export default React.memo(AccountEditPre);
