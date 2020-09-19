import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Theme from "../../GlobalLib/Styles/GlobalStyle/Theme";

const Icon = ({
  name,
  color = Theme.blackColor,
  size = 22,
  focused = true,
}: IconProps) => (
  <Ionicons
    name={name}
    color={focused ? color : Theme.darkGreyColor}
    size={size}
  />
);

interface IconProps {
  name: string;
  color?: string;
  size?: number;
  focused?: boolean;
}

export default Icon;
