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
      audioControlsIntro: factor(".audioPlayer_controls_intro"),
      audioMoreMenuIcon: factor(".audio_more_menu_icon"),
    },
    middle: {
      timeNavigate: {
        audioTimeNavigation: factor(".audio_time_navigation"),
        audioTimeNavigateNumber: factor(".audio_time_navigate_number"),
      },
      timeAppoint: {
        audioCurrentTime: factor(".audio_timebase_number"),
        audioTimeBar: factor(".audio_timebase_bar"),
        audioTimeBarValue: factor(".audio_timebase_bar_value"),
        audioTimeBarContainer: factor(".audio_timebase_bar_container"),
        audioBarHandle: factor(".audio_timebase_bar_handle"),
        audioTimebaseBarBuffer: factor(".audio_timebase_bar_buffer"),
      },
    },
    bottom: {
      basicButton: {
        audioPlayBtn: factor(".audioPlayIcon"),
        audioBackToStartIcon: factor(".audioBackToStart"),
        audioFrontMoveIcon: factor(".audioFrontMove"),
        audioBackMoveIcon: factor(".audioBackMove"),
      },
      volume: {
        audioVolumeBtn: factor(".audioVolumeIcon"),
        audioVolumeBar: factor(".audio_volume_bar"),
        audioVolumeBarValue: factor(".audio_volume_bar_value"),
      },
      endTimeBox: {
        audioEndTime: factor(".audio_end_time"),
        audioResizeHandle: factor(".audio_resize_handle"),
      },
    },
    menu: {
      audioMoreMenuScreen: factor(".audio_player_three_dot_menu"),
      audioMoreMenuClose: factor(".audio_player_three_dot_menu_back"),
      audioMoreMenuThumbnail: factor(".audio_player_three_dot_menu_thumbnail"),
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
    audioControlsIntro: HTMLElement;
    audioMoreMenuIcon: HTMLElement;
  };
  middle: {
    timeNavigate: {
      audioTimeNavigation: HTMLElement;
      audioTimeNavigateNumber: HTMLElement;
    };
    timeAppoint: {
      audioCurrentTime: HTMLElement;
      audioTimeBar: HTMLElement;
      audioTimeBarValue: HTMLElement;
      audioTimeBarContainer: HTMLElement;
      audioBarHandle: HTMLElement;
      audioTimebaseBarBuffer: HTMLElement;
    };
  };
  bottom: {
    basicButton: {
      audioPlayBtn: HTMLElement;
      audioBackToStartIcon: HTMLElement;
      audioFrontMoveIcon: HTMLElement;
      audioBackMoveIcon: HTMLElement;
    };
    volume: {
      audioVolumeBtn: HTMLElement;
      audioVolumeBar: HTMLElement;
      audioVolumeBarValue: HTMLElement;
    };
    endTimeBox: {
      audioEndTime: HTMLElement;
      audioResizeHandle: HTMLElement;
    };
  };
  menu: {
    audioMoreMenuScreen: HTMLElement;
    audioMoreMenuClose: HTMLElement;
    audioMoreMenuThumbnail: HTMLElement;
  };
  memory: {
    audioInfoMemory: HTMLElement;
  };
}
