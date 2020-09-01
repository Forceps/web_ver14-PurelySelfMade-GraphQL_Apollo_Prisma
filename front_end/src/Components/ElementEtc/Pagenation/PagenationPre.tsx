import React from "react";
import styled, { css } from "styled-components";
import { FlexCenter100per } from "../../../GlobalLib/Styles/IteratePattern/ToCenter";
import WH100per from "../../../GlobalLib/Styles/IteratePattern/WH100per";

interface PagenationProps {
  colorTheme: string;
}
const Pagenation = styled.div<PagenationProps>`
  display: grid;
  grid-template-rows: 30px 1fr;
  width: 400px;
  height: 58px;
  color: ${(p) => (p.colorTheme === "black" ? "#2d3436" : "#fafafa")};
`;
const PgnSbj = styled(WH100per)``;
const PgnNumList = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 1fr 10fr 1fr 1fr;
`;
interface NumsProps {
  NumberOfDigits: number;
}
const Nums = styled(WH100per)<NumsProps>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.NumberOfDigits}, 1fr);
`;
interface PageMoveBtnProps {
  colorTheme: string;
}
const PageMoveBtn = styled(FlexCenter100per)<PageMoveBtnProps>`
  cursor: pointer;
  &:hover {
    background-color: ${(p) =>
      p.colorTheme === "black" ? "#dfe6e9" : "#2d3436"};
  }
`;
interface PageNumProps {
  currentPostPage: number;
  inherenceNum: number;
  colorTheme: string;
}
const PageNum = styled(PageMoveBtn)<PageNumProps>`
  ${(p) => {
    if (p.currentPostPage === p.inherenceNum) {
      if (p.colorTheme === "black") {
        return css`
          background-color: #2d3436;
          color: #fafafa;
          &:hover {
            background-color: #636e72;
          }
        `;
      } else {
        return css`
          background-color: #dfe6e9;
          color: black;
          &:hover {
            background-color: #b2bec3;
          }
        `;
      }
    }
  }}
`;
const ReversalPlay = styled(PageMoveBtn)`
  display: flex;
  transform: scaleX(-1);
`;

const PagenationPre = ({
  PagenationNum,
  UpperUnitPageNum,
  CurrentUUP,
  setCurrentUUP,
  NumberOfDigits,
  CurrentPostPage,
  setCurrentPostPage,
  TotalPostCount,
  PostOneTimeShow,
  color,
}: PagenationPreProps) => {
  const Uuplast = UpperUnitPageNum[UpperUnitPageNum.length - 1];
  return (
    <Pagenation colorTheme={color}>
      <PgnSbj>Pagenation</PgnSbj>
      <PgnNumList>
        <PageMoveBtn
          onClick={() => {
            setCurrentUUP(1);
            setCurrentPostPage(1);
          }}
          colorTheme={color}
        >
          <i className="icon-fast-bw" />
        </PageMoveBtn>
        {CurrentUUP === 1 ? (
          <div />
        ) : (
          <ReversalPlay
            onClick={() => {
              setCurrentUUP((p: number) => {
                if (p > 1) {
                  return p - 1;
                } else {
                  return 1;
                }
              });
            }}
            colorTheme={color}
          >
            <i className="icon-play" />
          </ReversalPlay>
        )}
        <Nums NumberOfDigits={NumberOfDigits}>
          {PagenationNum.map((n) => (
            <PageNum
              key={n}
              onClick={() => {
                setCurrentPostPage(n);
              }}
              currentPostPage={CurrentPostPage}
              inherenceNum={n}
              colorTheme={color}
            >
              {n}
            </PageNum>
          ))}
        </Nums>
        {CurrentUUP === Uuplast ? (
          <div />
        ) : (
          <PageMoveBtn
            onClick={() => {
              setCurrentUUP((p: number) => {
                if (p < Uuplast) {
                  return p + 1;
                } else {
                  return Uuplast;
                }
              });
            }}
            colorTheme={color}
          >
            <i className="icon-play" />
          </PageMoveBtn>
        )}
        <PageMoveBtn
          onClick={() => {
            setCurrentUUP(Uuplast);
            setCurrentPostPage(Math.ceil(TotalPostCount / PostOneTimeShow));
          }}
          colorTheme={color}
        >
          <i className="icon-fast-fw" />
        </PageMoveBtn>
      </PgnNumList>
    </Pagenation>
  );
};

interface PagenationPreProps {
  PagenationNum: number[];
  UpperUnitPageNum: number[];
  CurrentUUP: number;
  setCurrentUUP: any;
  NumberOfDigits: number;
  CurrentPostPage: number;
  setCurrentPostPage: any;
  TotalPostCount: number;
  PostOneTimeShow: number;
  color: string;
}

export default React.memo(PagenationPre);
