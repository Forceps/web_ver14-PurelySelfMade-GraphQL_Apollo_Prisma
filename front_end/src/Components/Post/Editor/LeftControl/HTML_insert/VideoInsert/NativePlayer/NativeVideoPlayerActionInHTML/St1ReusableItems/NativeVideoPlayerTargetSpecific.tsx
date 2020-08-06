import React, { RefObject } from "react";
import ReusingLogic from "./ReusingLogic";

interface VideoTargetSpecificProps {
  videoTarget: Element;
  mediaTargetId?: any;
  setImgSubMenuOp2?: any;
  CaretLocation: any;
  InEditor: RefObject<HTMLElement>;
}
export default ({
  videoTarget,
  mediaTargetId,
  setImgSubMenuOp2,
  CaretLocation,
  InEditor,
}: VideoTargetSpecificProps) => {
  const factor = (selector: string) => {
    return videoTarget.querySelector(selector) as HTMLElement;
  };
  const videoElem: videoHtmlPlayerStructureInEditor = {
    videoTarget,
    videoPlayer: videoTarget.querySelector("video") as HTMLVideoElement,
    videoPlayerControls: factor(".videoPlayer_controls"),
    top: {
      ControlsIntro: factor(".videoPlayer_controls_intro"),
      moreMenuIcon: factor(".video_more_menu_icon"),
    },
    middle: {
      timeNavigate: {
        timeNavigation: factor(".video_time_navigation"),
        timeNavigateNumber: factor(".video_time_navigate_number"),
      },
      timeAppoint: {
        timeBar: factor(".video_timebase_bar"),
        timeBarValue: factor(".video_timebase_bar_value"),
        timeBarContainer: factor(".video_timebase_bar_container"),
        barHandle: factor(".video_timebase_bar_handle"),
        basebarBuffer: factor(".video_timebase_bar_buffer"),
      },
    },
    bottom: {
      playerBottom: factor(".videoPlayer_bottom"),
      basicButton: {
        playBtn: factor(".videoPlayIcon"),
        backToStartIcon: factor(".videoBackToStart"),
      },
      timeNumber: {
        currentTime: factor(".video_timebase_number"),
        endTime: factor(".video_end_time"),
      },
      volume: {
        controlsVolume: factor(".videoPlayer_controls_volume"),
        volumeBtn: factor(".videoVolumeIcon"),
        volumeBarWide: factor(".video_volume_bar_wide"),
        volumeBar: factor(".video_volume_bar"),
        volumeBarValue: factor(".video_volume_bar_value"),
      },
      toolBox: {
        resizeHandle: factor(".video_resize_handle"),
        nativeFullscreenIcon: factor(".video_native_fullscreen"),
      },
    },
    menu: {
      moreMenuScreen: factor(".video_player_three_dot_menu"),
      moreMenuClose: factor(".video_player_three_dot_menu_back"),
      screenKinds: {
        basic: factor(".video_player_menu_basic"),
        playBackSpeed: factor(".video_player_menu_speed"),
      },
      basic: {
        playSpeedMenu: factor(".video_player_menu_playback_speed"),
      },
      playBackSpeed: {
        back_to_basic: factor(".video_player_menu_speed_back_basic"),
        at_dot25: factor(".video_player_menu_speed_dot25"),
        at_dot5: factor(".video_player_menu_speed_dot5"),
        at_dot75: factor(".video_player_menu_speed_dot75"),
        at_1: factor(".video_player_menu_speed_1"),
        at_1dot25: factor(".video_player_menu_speed_1dot25"),
        at_1dot5: factor(".video_player_menu_speed_1dot5"),
        at_1dot75: factor(".video_player_menu_speed_1dot75"),
        at_2: factor(".video_player_menu_speed_2"),
      },
    },
    memory: {
      videoInfoMemory: factor(".video_info_memory"),
    },
    operationIndication: {
      plate: factor(".native_video_operation_indication"),
      icon: {
        play: factor(".voiPlay"),
      },
    },
  };

  return (
    <ReusingLogic
      InEditor={InEditor}
      videoElem={videoElem}
      setImgSubMenuOp2={setImgSubMenuOp2}
      mediaTargetId={mediaTargetId}
      CaretLocation={CaretLocation}
    />
  );
};

export interface videoHtmlPlayerStructureInEditor {
  videoTarget: Element;
  videoPlayer: HTMLVideoElement;
  videoPlayerControls: HTMLElement;
  top: {
    ControlsIntro: HTMLElement;
    moreMenuIcon: HTMLElement;
  };
  middle: {
    timeNavigate: {
      timeNavigation: HTMLElement;
      timeNavigateNumber: HTMLElement;
    };
    timeAppoint: {
      timeBar: HTMLElement;
      timeBarValue: HTMLElement;
      timeBarContainer: HTMLElement;
      barHandle: HTMLElement;
      basebarBuffer: HTMLElement;
    };
  };
  bottom: {
    playerBottom: HTMLElement;
    basicButton: {
      playBtn: HTMLElement;
      backToStartIcon: HTMLElement;
    };
    timeNumber: {
      currentTime: HTMLElement;
      endTime: HTMLElement;
    };
    volume: {
      controlsVolume: HTMLElement;
      volumeBtn: HTMLElement;
      volumeBarWide: HTMLElement;
      volumeBar: HTMLElement;
      volumeBarValue: HTMLElement;
    };
    toolBox: {
      resizeHandle: HTMLElement;
      nativeFullscreenIcon: HTMLElement;
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
    videoInfoMemory: HTMLElement;
  };
  operationIndication: {
    plate: HTMLElement;
    icon: {
      play: HTMLElement;
    };
  };
}
