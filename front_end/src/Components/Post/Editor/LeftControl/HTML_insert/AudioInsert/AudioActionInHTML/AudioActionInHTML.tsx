import React from "react";
import AudioTargetSpecific from "./St1ReusableItems/AudioTargetSpecific";

export default ({ rerenderingPoint }: AudioActionInHTMLProps) => {
  return <AudioTargetSpecific rerenderingPoint={rerenderingPoint} />;
};

interface AudioActionInHTMLProps {
  rerenderingPoint?: any;
}
