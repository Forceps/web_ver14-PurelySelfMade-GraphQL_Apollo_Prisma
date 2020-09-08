import React, { useState, useEffect } from "react";
import MakeRoomPre from "./MakeRoomPre";
import useInput from "../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { SeeFriendsRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Relation/Friend/FriendR";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";
import { CREATE_ROOM } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatCUD";
import { useMutation } from "@apollo/client";
import { SEE_ROOMS } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/RoomR";

export default ({
  zIndex = 20,
  setMakeRoomOpen,
  setRoomEnter,
  setParticularRoom,
}: MakeRoomConProps) => {
  const NameAssign = useInput("");
  const [Invited, setInvited] = useState<any[]>([]);
  const [Choiced, setChoiced] = useState<any[]>([]);
  const { loading: sfLoading, data: sfData } = SeeFriendsRequest(0);
  const include = (arg: any) => {
    const pushed = [arg, ...Invited];
    setInvited(pushed);
    const idx = Choiced.findIndex((i) => {
      return S_N_to_N(i.user_id) === S_N_to_N(arg.user_id);
    });
    let tempA = Choiced;
    tempA.splice(idx, 1, {
      user_id: arg.user_id,
      invited: true,
    });
    setChoiced(tempA);
  };
  const exclude = (user_id: number) => {
    const idx = Invited.findIndex((i) => {
      return S_N_to_N(i.user_id) === user_id;
    });
    let tempA = Invited;
    tempA.splice(idx, 1);
    setInvited(tempA);
    const idx2 = Choiced.findIndex((i) => {
      return S_N_to_N(i.user_id) === S_N_to_N(user_id);
    });
    let tempA2 = Choiced;
    tempA2.splice(idx2, 1, {
      user_id: `${user_id}`,
      invited: false,
    });
    setChoiced(tempA2);
  };
  const choicedCheck = (user_id: number | string) => {
    const finded: any = Choiced.filter(
      (i) => S_N_to_N(i.user_id) === S_N_to_N(user_id)
    );
    return finded[0]?.invited;
  };
  const submitCheck = NameAssign.value !== "" && Invited.length > 0;
  const [createRoomMutation] = useMutation(CREATE_ROOM, {
    refetchQueries: () => [
      {
        query: SEE_ROOMS,
        variables: {
          skip: 0,
          take: 5,
        },
      },
    ],
  });
  const createRoomSubmit = async () => {
    if (submitCheck) {
      let tempA: number[] = [];
      for (let i = 0; i < Invited.length; i++) {
        tempA = tempA.concat(S_N_to_N(Invited[i].user_id));
      }
      try {
        const roomIdMade: any = await createRoomMutation({
          variables: {
            name: NameAssign.value,
            users: tempA,
          },
        });
        setMakeRoomOpen(false);
        setParticularRoom(S_N_to_N(roomIdMade.data.createRoom));
        setRoomEnter(true);
      } catch (e) {
        console.log(e);
      }
    }
  };
  useEffect(() => {
    if (sfData && sfData.seeFriends) {
      let tebool: any[] = [];
      for (let i = 0; i < sfData.seeFriends.length; i++) {
        tebool = tebool.concat({
          user_id: sfData.seeFriends[i].user_id,
          invited: false,
        });
      }
      setChoiced(tebool);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sfLoading, sfData, sfData?.seeFriends]);
  return (
    <MakeRoomPre
      zIndex={zIndex}
      setMakeRoomOpen={setMakeRoomOpen}
      NameAssign={NameAssign}
      sfLoading={sfLoading}
      sfData={sfData?.seeFriends}
      Invited={Invited}
      include={include}
      exclude={exclude}
      choicedCheck={choicedCheck}
      createRoomSubmit={createRoomSubmit}
    />
  );
};
interface MakeRoomConProps {
  zIndex?: number;
  setMakeRoomOpen: any;
  setRoomEnter: any;
  setParticularRoom: any;
}
