import React from "react";
import ProfileEditPre from "./ProfileEditPre";

const ProfileEditCon = ({
  setProfileEditOpen,
  zIndex = 20,
}: ProfileEditProps) => {
  return (
    <ProfileEditPre setProfileEditOpen={setProfileEditOpen} zIndex={zIndex} />
  );
};
interface ProfileEditProps {
  setProfileEditOpen: any;
  zIndex?: number;
}

export default React.memo(ProfileEditCon);
