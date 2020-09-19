import React from "react";
import IndexNav from "../Navigation/IndexNav";
import AuthNavigation from "../Navigation/Stack/AuthNavigation";

export default ({ isLoggedIn }: NavControllerProps) => {
  return isLoggedIn ? <IndexNav /> : <AuthNavigation />;
};

interface NavControllerProps {
  isLoggedIn: null | boolean;
}
