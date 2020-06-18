import React from "react";

interface EmptProps {
  setSignUpMode: any;
}
export const Empt = ({ setSignUpMode }: EmptProps) => {
  return (
    <div
      onClick={(e) => {
        setSignUpMode(false);
      }}
    />
  );
};
