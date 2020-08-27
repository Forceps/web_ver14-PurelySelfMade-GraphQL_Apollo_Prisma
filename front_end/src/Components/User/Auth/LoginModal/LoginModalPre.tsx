import React from "react";
import styled from "styled-components";
import CreateAccountCon from "../CreateAccount/CreateAccountCon";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import TemporaryBackground from "../../../ElementEtc/Effect/TemporaryBackground";
import { W100per } from "../../../../GlobalLib/Styles/IteratePattern/WH100per";

interface zIndexProp {
  zIndex: number;
}
const Wrapper = styled.div<zIndexProp>`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: ${(p) => p.zIndex};
`;
const Templeate = styled.div<zIndexProp>`
  display: grid;
  grid-template-rows: 80px 184px 1fr 56px;
  position: relative;
  width: 300px;
  height: 540px;
  padding: 15px;
  background-color: #fafafa;
  z-index: ${(p) => p.zIndex};
`;
const Column = styled(W100per)`
  display: grid;
  align-items: center;
`;
const Column2dot1 = styled(Column)`
  padding: 10px;
`;
const Column2dot2 = styled(Column)`
  display: flex;
  flex-direction: column;
  justify-content: right;
  padding: 5px 25px 5px 5px;
`;
const Column2dot4 = styled(Column)`
  display: grid;
  justify-content: left;
  align-self: center;
  user-select: none;
`;
const Column2dot5 = styled(Column)`
  display: grid;
  justify-content: right;
  padding-right: 20px;
`;
const Text = styled.div`
  font-size: 20px;
  user-select: none;
`;
const Input = styled.input`
  font-size: 1rem;
  padding: 7px;
  width: 100%;
  margin-top: 18px;
  border: 0px;
  border-bottom: 1px solid #636e72;
  background-color: #fafafa;
`;
const Button = styled.button`
  font-size: 16px;
  border: 0px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  outline-style: none;
  user-select: none;
`;
const LoginButton = styled(Button)`
  width: 130px;
  margin-top: 24px;
  margin-left: 107px;
  background-color: #636e72;
  color: white;
`;
const SignUp = styled(Button)`
  display: grid;
  width: 180px;
  padding: 11px;
  background-color: #dfe6e9;
  margin: 0;
`;
const GoogleLogin = styled(Button)`
  display: flex;
  padding: 5px;
  font-size: 18px;
  text-align: left;
  background-color: #fafafa;
  &:hover {
    opacity: 0.8;
  }
`;
const GoogleLogo = styled.div`
  margin-right: 5px;
  color: #4285f4;
`;
const FaceBookLogin = styled(Button)`
  display: flex;
  padding: 5px;
  font-size: 18px;
  text-align: left;
  background-color: #fafafa;
  &:hover {
    opacity: 0.8;
  }
`;
const FaceBookLogo = styled.div`
  margin-right: 5px;
  color: #4d68a1;
`;
type LoginModalPreProps = {
  zIndex: number;
  setLoginModalOpen: any;
  email: any;
  PW: any;
  SignUpMode: boolean;
  setSignUpMode: any;
  LogInTrigger: any;
};
export default ({
  zIndex,
  setLoginModalOpen,
  email,
  PW,
  SignUpMode,
  setSignUpMode,
  LogInTrigger,
}: LoginModalPreProps) => {
  return (
    <Wrapper zIndex={zIndex}>
      <TemporaryBackground
        zIndex={zIndex + 1}
        onClick={(e: any) => {
          spaped(e);
          setLoginModalOpen(false);
        }}
      />
      <Templeate zIndex={zIndex + 2}>
        <Column2dot1>
          <Text>Login</Text>
        </Column2dot1>
        <Column2dot2>
          <Input placeholder="email" {...email} spellCheck="false" />
          <Input
            placeholder="Password"
            type="password"
            {...PW}
            spellCheck="false"
            onKeyUp={(e: any) => {
              if (e.keyCode === 13) {
                spaped(e);
                LogInTrigger();
              }
            }}
          />
          <LoginButton
            type="submit"
            onClick={(e: any) => {
              spaped(e);
              LogInTrigger();
            }}
          >
            Login
          </LoginButton>
        </Column2dot2>
        <Column2dot4>
          <GoogleLogin>
            <GoogleLogo>
              <i className="icon-google" />
            </GoogleLogo>
            google Login
          </GoogleLogin>
          <FaceBookLogin>
            <FaceBookLogo>
              <i className="icon-facebook-official" />
            </FaceBookLogo>
            facebook Login
          </FaceBookLogin>
        </Column2dot4>
        <Column2dot5>
          <SignUp
            onClick={() => {
              setSignUpMode(true);
            }}
          >
            Sign Up
          </SignUp>
        </Column2dot5>
      </Templeate>
      {SignUpMode && (
        <CreateAccountCon zIndex={zIndex + 10} setSignUpMode={setSignUpMode} />
      )}
    </Wrapper>
  );
};
