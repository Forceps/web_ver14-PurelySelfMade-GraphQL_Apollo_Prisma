import React from "react";
import styled from "styled-components";
import { Operation } from "../../../EditorLib";
import WH100per from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const Picker = styled(WH100per)`
  display: grid;
  grid-template-rows: repeat(19, 1fr);
  height: 400px;
  position: absolute;
  top: -404px;
  background-color: #fafafa;
`;
const ColorRow = styled(WH100per)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
interface ColorCellProps {
  bgColor: string;
}
const ColorCell = styled(WH100per)<ColorCellProps>`
  background-color: ${(p) => p.bgColor};
  &:hover {
    opacity: 0.7;
  }
  cursor: pointer;
`;

const ColorPicker = ({ ColorObj }: ColorPickerProps) => {
  return (
    <Picker>
      {colorSetArr.map((c) => (
        <ColorRow>
          {c.map((c2) => (
            <ColorCell
              bgColor={c2}
              onMouseDown={async (e) => {
                spaped(e);
                switch (ColorObj) {
                  case "back":
                    await Operation(e, "hiliteColor", c2);
                    break;
                  default:
                    await Operation(e, "foreColor", c2);
                }
              }}
            />
          ))}
        </ColorRow>
      ))}
    </Picker>
  );
};
interface ColorPickerProps {
  ColorObj: string;
}
export default React.memo(ColorPicker);

const colorSetArr = [
  ["#000000", "#525252", "#969696", "#d9d9d9", "#ffffff"],
  ["#b71c1c", "#d32f2f", "#f44336", "#e57373", "#ffcdd2"],
  ["#880e4f", "#c2185b", "#e91e63", "#f06292", "#f8bbd0"],
  ["#4a148c", "#7b1fa2", "#9c27b0", "#ba68c8", "#e1bee7"],
  ["#311b92", "#512da8", "#673ab7", "#9575cd", "#d1c4e9"],
  ["#1a237e", "#303f9f", "#3f51b5", "#7986cb", "#c5cae9"],
  ["#0d47a1", "#1976d2", "#2196f3", "#64b5f6", "#bbdefb"],
  ["#01579b", "#0288d1", "#03a9f4", "#4fc3f7", "#b3e5fc"],
  ["#006064", "#0097a7", "#00bcd4", "#4dd0e1", "#b2ebf2"],
  ["#004d40", "#00796b", "#009688", "#4db6ac", "#b2dfdb"],
  ["#194d33", "#388e3c", "#4caf50", "#81c784", "#c8e6c9"],
  ["#33691e", "#689f38", "#8bc34a", "#aed581", "#dcedc8"],
  ["#827717", "#afb42b", "#cddc39", "#dce775", "#f0f4c3"],
  ["#f57f17", "#fbc02d", "#ffeb3b", "#fff176", "#fff9c4"],
  ["#ff6f00", "#ffa000", "#ffc107", "#ffd54f", "#ffecb3"],
  ["#e65100", "#f57c00", "#ff9800", "#ffb74d", "#ffe0b2"],
  ["#bf360c", "#e64a19", "#ff5722", "#ff8a65", "#ffccbc"],
  ["#3e2723", "#5d4037", "#795548", "#a1887f", "#d7ccc8"],
  ["#263238", "#455a64", "#607d8b", "#90a4ae", "#cfd8dc"],
];
