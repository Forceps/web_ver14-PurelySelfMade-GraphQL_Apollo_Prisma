import { audioTarget } from "../St1ReusableItems/AudioTargetSpecific";

let resizeHandleActive = false;
const audioResizeHandleMouseMove = (e: any) => {
  let width = 0;
  width = e.pageX - audioTarget(e).getBoundingClientRect().left + 5;
  let height = 0;
  height = e.pageY - audioTarget(e).getBoundingClientRect().top + 5;
  audioTarget(e).setAttribute(
    "style",
    `width: ${width}px; height: ${height}px;`
  );
  resizeHandleActive = true;
};
const audioResizeHandleMouseDown = (e: any) => {
  if (e.button === 0) {
    audioResizeHandleMouseMove(e);
    document.addEventListener("mousemove", audioResizeHandleMouseMove);
  }
};
const audioResizeHandleMouseUp = (e: any) => {
  if (e.button === 0) {
    document.removeEventListener("mousemove", audioResizeHandleMouseMove);
    if (resizeHandleActive) {
      document.execCommand("insertHTML", false, "<div></div>");
      resizeHandleActive = false;
    }
  }
};

export const audio_resizing_init = () => {
  const audioResizeHandle = document.getElementsByClassName(
    "audio_resize_handle"
  );

  for (let i = 0; i < audioResizeHandle.length; i++) {
    audioResizeHandle[i].addEventListener(
      "mousedown",
      audioResizeHandleMouseDown
    );
    document.addEventListener("mouseup", audioResizeHandleMouseUp);
  }
};
