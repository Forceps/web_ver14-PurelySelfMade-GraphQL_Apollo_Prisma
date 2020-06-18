import React from "react";
import DisplayPre from "./DisplayPre";

export default ({ user_id, Mode }: DisplayCon) => {
  return <DisplayPre user_id={user_id} Mode={Mode} />;
};

interface DisplayCon {
  user_id: number;
  Mode: string;
}
