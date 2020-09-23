import React from "react";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Theme from "../../GlobalLib/Styles/GlobalStyle/Theme";

const Icon = ({
  name,
  color = Theme.blackColor,
  size = 22,
  focused = true,
  kind,
}: IconProps) => {
  switch (kind) {
    case "FontAwesome":
      return (
        <FontAwesome
          name={name}
          color={focused ? color : Theme.darkGreyColor}
          size={size}
        />
      );
    case "FontAwesome5":
      return (
        <FontAwesome5
          name={name}
          color={focused ? color : Theme.darkGreyColor}
          size={size}
        />
      );
    case "MaterialCommunityIcons":
      return (
        <MaterialCommunityIcons
          name={name}
          color={focused ? color : Theme.darkGreyColor}
          size={size}
        />
      );
    case "AntDesign":
      return (
        <AntDesign
          name={name}
          color={focused ? color : Theme.darkGreyColor}
          size={size}
        />
      );
    default:
      return (
        <Ionicons
          name={name}
          color={focused ? color : Theme.darkGreyColor}
          size={size}
        />
      );
  }
};

interface IconProps {
  name: string;
  color?: string;
  size?: number;
  focused?: boolean;
  kind?:
    | "FontAwesome"
    | "FontAwesome5"
    | "MaterialCommunityIcons"
    | "AntDesign"
    | "Ionicons";
}

export default React.memo(Icon);
