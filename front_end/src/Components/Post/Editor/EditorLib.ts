// import iro from "@jaames/iro";

import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

export const Operation = (e: any, cmd: string, arg?: any) => {
  return new Promise((sol, jec) => {
    if (e !== null) {
      spaped(e);
    }
    document.execCommand(cmd, false, arg);
    sol("");
  });
};
export const saveSelection = () => {
  if (window.getSelection) {
    const sel = window.getSelection();
    if (sel?.getRangeAt && sel?.rangeCount) {
      return sel.getRangeAt(0);
    }
  } else {
    return null;
  }
};
export const restoreSelection = (range: any) => {
  return new Promise((sol, jec) => {
    if (range) {
      if (window.getSelection) {
        const sel: any = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
    sol("");
  });
};

export const titleImgSubstitute = () => {
  const node: any = document.getElementById("CUedit");
  document.getSelection()?.selectAllChildren(node);
  const sel: any = window.getSelection();
  return sel.toString().substring(0, 280);
};
// export const colorPickerConfig = {
//   layout: [
//     {
//       component: iro.ui.Wheel,
//       options: {
//         wheelLightness: true,
//         wheelAngle: 0,
//         wheelDirection: "anticlockwise",
//         width: 100
//       }
//     },
//     {
//       component: iro.ui.Slider,
//       options: {
//         sliderType: "value",
//         width: 100
//       }
//     }
//   ]
// };
