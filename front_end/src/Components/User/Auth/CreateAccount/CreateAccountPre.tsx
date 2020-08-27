import React from "react";
import TemporaryBackground from "../../../ElementEtc/Effect/TemporaryBackground";
import styled, { css } from "styled-components";
import { Empt } from "../AuthLib";
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
const TypingInfoBack = styled.div<zIndex>`
  display: grid;
  grid-template-columns: 1fr 18px 340px 18px 1fr;
  position: relative;
  width: 740px;
  height: 600px;
  z-index: ${(p) => p.zIndex};
`;
const Info = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  padding: 13px;
  font-size: 16px;
  align-items: center;
  line-height: 1.3rem;
`;
const MainT = styled.div`
  font-size: 20px;
  margin-bottom: 12px;
`;
const Area = styled.div`
  display: grid;
`;
const InfoLeft = styled(Area)`
  grid-template-rows: 136px 151px 1fr;
`;
const UsernameInfo = styled(Info)`
  height: 136px;
`;
const PasswordInfo = styled(Info)`
  height: 136px;
  margin-top: 15px;
`;
const InfoRight = styled(Area)`
  grid-template-rows: 100px 110px 135px 1fr;
`;
const EmailInfo = styled(Info)`
  height: 110px;
`;
const ConfirmPasswordInfo = styled(Info)`
  height: 120px;
  margin-top: 15px;
  font-size: 18px;
  line-height: 1.8rem;
`;
const Template = styled.div`
  display: grid;
  grid-template-rows: 60px 250px 1fr 60px;
  position: relative;
  padding: 15px;
  z-index: 12;
  width: 340px;
  height: 600px;
  background-color: #fafafa;
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
const Empty = styled(Empt)`
  width: 100%;
  height: 100%;
`;
const ArrowAreaLeft = styled(Area)`
  grid-template-rows: 136px 107px 1fr;
`;
const ArrowAreaRight = styled(Area)`
  grid-template-rows: 100px 110px 87px 1fr;
`;
interface ConnectLineProps {
  MarginTop: number;
  Direction: string;
}
const ConnectLine: any = styled.div<ConnectLineProps>`
  margin-top: ${(prop) => prop.MarginTop}px;
  width: 0px;
  height: 0px;
  border-top: 6px solid transparent;
  ${(prop) => {
    if (prop.Direction === "left") {
      return css`
        border-left: 18px solid white;
      `;
    } else if (prop.Direction === "right") {
      return css`
        border-right: 18px solid white;
      `;
    }
  }}
  border-bottom: 6px solid transparent;
`;

type CreateAccountPreProps = {
  zIndex: number;
  setSignUpMode: any;
  username: any;
  email: any;
  password: any;
  Confirmpassword: any;
  AccountCreate: any;
  UN_Valid: boolean;
  EmailValid: any;
  PW_Valid: boolean;
  CPW_Valid: boolean;
  UN_ValidPop: any;
  EmailValidPop: any;
  PW_ValidPop: any;
  CPW_ValidPop: any;
  SignUp_Valid: any;
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
  UN_Valid,
  EmailValid,
  PW_Valid,
  CPW_Valid,
  UN_ValidPop,
  EmailValidPop,
  PW_ValidPop,
  CPW_ValidPop,
  SignUp_Valid,
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
      <TypingInfoBack zIndex={zIndex + 2}>
        <InfoLeft>
          {UN_Valid ? (
            <UsernameInfo>
              <div>
                <MainT>username</MainT>
                must be more than 1 characters and less than 60 characters.
              </div>
            </UsernameInfo>
          ) : (
            <Empty setSignUpMode={setSignUpMode} />
          )}
          {PW_Valid ? (
            <>
              <PasswordInfo>
                <div>
                  <MainT>password</MainT>
                  must be at least 10 characters and less than 45 characters.
                </div>
              </PasswordInfo>
              <Empty setSignUpMode={setSignUpMode} />
            </>
          ) : (
            <>
              <Empty setSignUpMode={setSignUpMode} />
              <Empty setSignUpMode={setSignUpMode} />
            </>
          )}
        </InfoLeft>
        <ArrowAreaLeft>
          {UN_Valid ? (
            <ConnectLine MarginTop={113} Direction={"left"} />
          ) : (
            <Empty setSignUpMode={setSignUpMode} />
          )}
          {PW_Valid ? (
            <>
              <ConnectLine MarginTop={95} Direction={"left"} />
              <Empty setSignUpMode={setSignUpMode} />
            </>
          ) : (
            <>
              <Empty setSignUpMode={setSignUpMode} />
              <Empty setSignUpMode={setSignUpMode} />
            </>
          )}
        </ArrowAreaLeft>
        <Template>
          <Column1>Sign Up</Column1>
          <Column2>
            <Input
              {...username}
              placeholder={"User Name"}
              onBlur={UN_ValidPop}
              onKeyUp={Assur}
              spellCheck="false"
            />
            <Input
              {...email}
              placeholder={"email"}
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
              onKeyUp={(e: any) => {
                CPW_ValidPop();
                if (e.keyCode === 13) {
                  spaped(e);
                  AccountCreate();
                }
              }}
            />
          </Column2>
          <Column3>
            <ol>
              {SignUp_Valid[0] ? (
                SignUp_Valid[1] === "error1" ? (
                  <li>Please fill in all fields.</li>
                ) : SignUp_Valid[1] === "error2" ? (
                  <li>The email was already taken, Log in instead.</li>
                ) : SignUp_Valid[1] === "loading" ? (
                  <li>Loading...</li>
                ) : null
              ) : null}
            </ol>
          </Column3>
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
        <ArrowAreaRight>
          <Empty setSignUpMode={setSignUpMode} />
          {EmailValid[0] ? (
            <ConnectLine MarginTop={66} Direction={"right"} />
          ) : (
            <Empty setSignUpMode={setSignUpMode} />
          )}
          {CPW_Valid ? (
            <>
              <ConnectLine MarginTop={75} Direction={"right"} />
              <Empty setSignUpMode={setSignUpMode} />
            </>
          ) : (
            <>
              <Empty setSignUpMode={setSignUpMode} />
              <Empty setSignUpMode={setSignUpMode} />
            </>
          )}
        </ArrowAreaRight>
        <InfoRight>
          <Empty setSignUpMode={setSignUpMode} />
          {EmailValid[0] ? (
            <EmailInfo>
              <div>
                <MainT>email</MainT>
                {EmailValid[1] === "length"
                  ? "must be less than 150 characters."
                  : "email is invalid"}
              </div>
            </EmailInfo>
          ) : (
            <Empty setSignUpMode={setSignUpMode} />
          )}
          {CPW_Valid ? (
            <>
              <ConfirmPasswordInfo>
                <div>password and Confirmpassword do not match.</div>
              </ConfirmPasswordInfo>
              <Empty setSignUpMode={setSignUpMode} />
            </>
          ) : (
            <>
              <Empty setSignUpMode={setSignUpMode} />
              <Empty setSignUpMode={setSignUpMode} />
            </>
          )}
        </InfoRight>
      </TypingInfoBack>
    </Wrapper>
  );
};
