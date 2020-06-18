import React from "react";
import PDHeaderPre from "./PDHeaderPre";

export default ({ setLoginOpen }: PDHeaderConProps) => {
  return <PDHeaderPre setLoginOpen={setLoginOpen} />;
};

interface PDHeaderConProps {
  setLoginOpen: any;
}
