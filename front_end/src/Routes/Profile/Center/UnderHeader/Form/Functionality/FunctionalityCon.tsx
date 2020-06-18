import React, { useState } from "react";
import FunctionalityPre from "./FunctionalityPre";

export default () => {
  const [GroupMakeOpen, setGroupMakeOpen] = useState(false);
  return (
    <FunctionalityPre
      GroupMakeOpen={GroupMakeOpen}
      setGroupMakeOpen={setGroupMakeOpen}
    />
  );
};
