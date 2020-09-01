import React, { useState, useEffect } from "react";
import PagenationPre from "./PagenationPre";
import { useProfileDetailMode } from "../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";

export default () => {
  const PfDM = useProfileDetailMode();
  const [PagenationNum, setPagenationNum] = useState([1]);
  const [UpperUnitPageNum, setUpperUnitPageNum] = useState([1]);
  const [CurrentUUP, setCurrentUUP] = useState(1);
  const [NumberOfDigits] = useState(8);

  const divide =
    Math.ceil(PfDM.TotalPostCount / PfDM.PostOneTimeShow) === 0
      ? 1
      : Math.ceil(PfDM.TotalPostCount / PfDM.PostOneTimeShow);
  const divideU = Math.ceil(divide / NumberOfDigits);

  useEffect(() => {
    let arrU: number[] = [];
    for (let i = 1; i <= divideU; i++) {
      arrU = arrU.concat(i);
    }
    setUpperUnitPageNum(arrU);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PfDM.TotalPostCount]);
  useEffect(() => {
    let arr: number[] = [];
    if (CurrentUUP === divideU) {
      for (let i = 1; i <= divide - (divideU - 1) * NumberOfDigits; i++) {
        arr = arr.concat(i + (divideU - 1) * NumberOfDigits);
      }
    } else {
      for (let i = 1; i <= NumberOfDigits; i++) {
        arr = arr.concat((CurrentUUP - 1) * NumberOfDigits + i);
      }
    }
    setPagenationNum(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentUUP]);

  return (
    <PagenationPre
      PagenationNum={PagenationNum}
      UpperUnitPageNum={UpperUnitPageNum}
      CurrentUUP={CurrentUUP}
      setCurrentUUP={setCurrentUUP}
      NumberOfDigits={NumberOfDigits}
    />
  );
};
