import React, { useState } from "react";
import SettingsModePre from "./SettingsModePre";

const SettingsModeCon = () => {
  const [ProfileEditOpen, setProfileEditOpen] = useState(true);
  return (
    <SettingsModePre
      ProfileEditOpen={ProfileEditOpen}
      setProfileEditOpen={setProfileEditOpen}
    />
  );
};

export default React.memo(SettingsModeCon);
