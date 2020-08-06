import React, { RefObject } from "react";
import ReusingLogic from "./ReusingLogic";

interface AudioTargetSpecificProps {
  audioTarget: Element;
  mediaTargetId?: any;
  setImgSubMenuOp2?: any;
  CaretLocation: any;
  InEditor: RefObject<HTMLElement>;
}
export default ({
  audioTarget,
  mediaTargetId,
  setImgSubMenuOp2,
  CaretLocation,
  InEditor,
}: AudioTargetSpecificProps) => {
  const factor = (selector: string) => {
    return audioTarget.querySelector(selector) as HTMLElement;
  };
  const audioElem: audioHtmlPlayerStructureInEditor = {
    audioTarget,
    audioPlayer: audioTarget.querySelector("audio") as HTMLAudioElement,
    top: {
      controlsIntro: factor(".audioPlayer_controls_intro"),
      moreMenuIcon: factor(".audio_more_menu_icon"),
    },
    middle: {
      timeNavigate: {
        timeNavigation: factor(".audio_time_navigation"),
        timeNavigateNumber: factor(".audio_time_navigate_number"),
      },
      timeAppoint: {
        currentTime: factor(".audio_timebase_number"),
        timeBar: factor(".audio_timebase_bar"),
        timeBarValue: factor(".audio_timebase_bar_value"),
        timeBarContainer: factor(".audio_timebase_bar_container"),
        barHandle: factor(".audio_timebase_bar_handle"),
        timebaseBarBuffer: factor(".audio_timebase_bar_buffer"),
        timebaseNavigate: factor(".audio_timebase_navigate"),
      },
    },
    bottom: {
      basicButton: {
        playBtn: factor(".audioPlayIcon"),
        backToStartIcon: factor(".audioBackToStart"),
        frontMoveIcon: factor(".audioFrontMove"),
        backMoveIcon: factor(".audioBackMove"),
      },
      volume: {
        volumeBtn: factor(".audioVolumeIcon"),
        volumeBar: factor(".audio_volume_bar"),
        volumeBarValue: factor(".audio_volume_bar_value"),
      },
      endTimeBox: {
        endTime: factor(".audio_end_time"),
        audioResizeHandle: factor(".audio_resize_handle"),
      },
    },
    menu: {
      moreMenuScreen: factor(".audio_player_three_dot_menu"),
      moreMenuClose: factor(".audio_player_three_dot_menu_back"),
      screenKinds: {
        basic: factor(".audio_player_menu_basic"),
        playBackSpeed: factor(".audio_player_menu_speed"),
      },
      basic: {
        moreMenuThumbnail: factor(".audio_player_three_dot_menu_thumbnail"),
        playSpeedMenu: factor(".audio_player_menu_playback_speed"),
      },
      playBackSpeed: {
        back_to_basic: factor(".audio_player_menu_speed_back_basic"),
        at_dot25: factor(".audio_player_menu_speed_dot25"),
        at_dot5: factor(".audio_player_menu_speed_dot5"),
        at_dot75: factor(".audio_player_menu_speed_dot75"),
        at_1: factor(".audio_player_menu_speed_1"),
        at_1dot25: factor(".audio_player_menu_speed_1dot25"),
        at_1dot5: factor(".audio_player_menu_speed_1dot5"),
        at_1dot75: factor(".audio_player_menu_speed_1dot75"),
        at_2: factor(".audio_player_menu_speed_2"),
      },
    },
    memory: {
      audioInfoMemory: factor(".audio_info_memory"),
    },
  };

  return (
    <ReusingLogic
      InEditor={InEditor}
      mediaTargetId={mediaTargetId}
      setImgSubMenuOp2={setImgSubMenuOp2}
      CaretLocation={CaretLocation}
      audioElem={audioElem}
    />
  );
};

export interface audioHtmlPlayerStructureInEditor {
  audioTarget: Element;
  audioPlayer: HTMLAudioElement;
  top: {
    controlsIntro: HTMLElement;
    moreMenuIcon: HTMLElement;
  };
  middle: {
    timeNavigate: {
      timeNavigation: HTMLElement;
      timeNavigateNumber: HTMLElement;
    };
    timeAppoint: {
      currentTime: HTMLElement;
      timeBar: HTMLElement;
      timeBarValue: HTMLElement;
      timeBarContainer: HTMLElement;
      barHandle: HTMLElement;
      timebaseBarBuffer: HTMLElement;
      timebaseNavigate: HTMLElement;
    };
  };
  bottom: {
    basicButton: {
      playBtn: HTMLElement;
      backToStartIcon: HTMLElement;
      frontMoveIcon: HTMLElement;
      backMoveIcon: HTMLElement;
    };
    volume: {
      volumeBtn: HTMLElement;
      volumeBar: HTMLElement;
      volumeBarValue: HTMLElement;
    };
    endTimeBox: {
      endTime: HTMLElement;
      audioResizeHandle: HTMLElement;
    };
  };
  menu: {
    moreMenuScreen: HTMLElement;
    moreMenuClose: HTMLElement;
    screenKinds: {
      basic: HTMLElement;
      playBackSpeed: HTMLElement;
    };
    basic: {
      moreMenuThumbnail: HTMLElement;
      playSpeedMenu: HTMLElement;
    };
    playBackSpeed: {
      back_to_basic: HTMLElement;
      at_dot25: HTMLElement;
      at_dot5: HTMLElement;
      at_dot75: HTMLElement;
      at_1: HTMLElement;
      at_1dot25: HTMLElement;
      at_1dot5: HTMLElement;
      at_1dot75: HTMLElement;
      at_2: HTMLElement;
    };
  };
  memory: {
    audioInfoMemory: HTMLElement;
  };
}
