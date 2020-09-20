import React from "react";
import IndexNav from "../Navigation/IndexNav";
import AuthNavigation from "../Navigation/Stack/AuthNavigation";

export default ({ isLoggedIn }: NavControllerProps) => {
  return true ? <IndexNav /> : <AuthNavigation />;
};

interface NavControllerProps {
  isLoggedIn: null | boolean;
}
