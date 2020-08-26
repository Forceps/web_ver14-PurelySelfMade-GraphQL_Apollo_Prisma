import React, { createContext, ReactNode, useContext, useState } from "react";
import InstantMessageCon from "./InstantMessage/InstantMessageCon";

interface ShortMessageContext {
  addMessage: (Subject: string, Message: string) => void;
}
const ShortMessageContext = createContext<ShortMessageContext | undefined>(
  undefined
);
export const ShortMessageProvider = ({ children }: { children: ReactNode }) => {
  const [Mserise, setMserise] = useState < [][(string, string)] > [];

  const addMessage = (Subject: string, Message: string) => {
    let arr = Mserise;
    arr = arr.concat([[Subject, Message]]);
  };

  const value = { addMessage };

  return (
    <ShortMessageContext.Provider value={value}>
      {children}
      {Mserise.map((li) => (
        <InstantMessageCon />
      ))}
    </ShortMessageContext.Provider>
  );
};

export const useShortMessage = () => {
  const state = useContext(ShortMessageContext);
  if (!state) throw new Error("ShortMessageContext not found");
  return state;
};

export interface MedataStructure {
  user_id: string;
  username: string;
  email: string;
  avatar: string;
  back_img: string;
  guaranteed_capacity: string;
  daily_allocated_capacity: string;
}
