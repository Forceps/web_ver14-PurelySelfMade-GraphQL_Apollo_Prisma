import { audio_button_init } from "./St2Logics/Buttons";
import { audio_initiate_init } from "./St2Logics/Initiate";
import { audio_timeAppointing_init } from "./St2Logics/TimeAppointing";
import { audio_resizing_init } from "./St2Logics/Resizing";
import { audio_moremenu_init } from "./St2Logics/MoreMenu";
import { audio_volume_init } from "./St2Logics/Volume";
import { audio_timeNavi_init } from "./St2Logics/TimeNavigate";

export const audio_player_javascript_flat_sync = () => {
  audio_button_init();
  audio_initiate_init();
  audio_moremenu_init();
  audio_resizing_init();
  audio_timeAppointing_init();
  audio_timeNavi_init();
  audio_volume_init();
};
