import React from "react";
import TemporaryBackground from "../../../ElementEtc/Effect/TemporaryBackground";
import styled, { css } from "styled-components";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

interface zIndex {
  zIndex: number;
}
const Wrapper = styled.div<zIndex>`
  position: fixed;
  display: flex;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: ${(p) => p.zIndex};
`;
const Template = styled.div<zIndex>`
  display: grid;
  grid-template-rows: 60px 250px 1fr 60px;
  position: relative;
  padding: 15px;
  z-index: 12;
  width: 340px;
  height: 600px;
  background-color: #fafafa;
  z-index: ${(p) => p.zIndex};
`;
const Input = styled.input`
  font-size: 1rem;
  padding: 7px;
  width: 100%;
  margin-top: 25px;
  border: 0px;
  border-bottom: 1px;
  border-style: solid;
  border-color: #636e72;
  background-color: #fafafa;
`;
const Button = styled.button`
  font-size: 16px;
  border: 0px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  outline-style: none;
`;
interface ConnectLineProps {
  Assurance: boolean;
}
const SignUp = styled(({ Assurance, ...rest }) => <Button {...rest} />)<
  ConnectLineProps
>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 50px;
  margin: 0;
  user-select: none;
  ${(prop) => {
    if (prop.Assurance) {
      return css`
        background-color: #636e72;
        color: white;
      `;
    } else {
      return css`
        background-color: #dfe6e9;
      `;
    }
  }}
`;
const Column = styled.div``;
const Column1 = styled(Column)`
  padding: 13px 0 0 7px;
  font-size: 23px;
  user-select: none;
`;
const Column2 = styled(Column)`
  padding: 0 30px 0 10px;
`;
const Column3 = styled(Column)`
  display: grid;
  align-items: center;
  padding: 5px 10px 15px 10px;
  font-size: 16px;
  line-height: 1.5rem;
`;
const Column4 = styled(Column)`
  display: grid;
  justify-content: center;
`;

type CreateAccountPreProps = {
  zIndex: number;
  setSignUpMode: any;
  username: any;
  email: any;
  password: any;
  Confirmpassword: any;
  AccountCreate: any;
  UN_ValidPop: any;
  EmailValidPop: any;
  PW_ValidPop: any;
  CPW_ValidPop: any;
  Assurance: any;
  Assur: any;
};
export default ({
  zIndex,
  setSignUpMode,
  username,
  email,
  password,
  Confirmpassword,
  AccountCreate,
  UN_ValidPop,
  EmailValidPop,
  PW_ValidPop,
  CPW_ValidPop,
  Assurance,
  Assur,
}: CreateAccountPreProps) => {
  return (
    <Wrapper zIndex={zIndex}>
      <TemporaryBackground
        zIndex={zIndex + 1}
        onClick={(e: any) => {
          spaped(e);
          setSignUpMode(false);
        }}
      />
      <Template zIndex={zIndex + 2}>
        <Column1>Sign Up</Column1>
        <Column2>
          <Input
            {...username}
            placeholder={"User name"}
            onBlur={UN_ValidPop}
            onKeyUp={Assur}
            spellCheck="false"
          />
          <Input
            {...email}
            placeholder={"e-mail"}
            onBlur={EmailValidPop}
            onKeyUp={Assur}
            spellCheck="false"
          />
          <Input
            {...password}
            placeholder={"password"}
            type={"password"}
            onBlur={PW_ValidPop}
            onKeyUp={Assur}
          />
          <Input
            {...Confirmpassword}
            placeholder={"Confirm password"}
            type={"password"}
            onBlur={CPW_ValidPop}
            onKeyUp={(e: any) => {
              Assur();
              if (e.keyCode === 13) {
                spaped(e);
                AccountCreate();
              }
            }}
          />
        </Column2>
        <Column3></Column3>
        <Column4>
          <SignUp
            onClick={() => {
              AccountCreate();
            }}
            Assurance={Assurance}
          >
            Sign Up
          </SignUp>
        </Column4>
      </Template>
    </Wrapper>
  );
};
