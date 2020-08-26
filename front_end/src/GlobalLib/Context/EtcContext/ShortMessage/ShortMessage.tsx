import React, { createContext, ReactNode, useContext, useState } from "react";
import InstantMessageCon from "./InstantMessage/InstantMessageCon";
import cryptoRandomString from "crypto-random-string";

interface ShortMessageContext {
  addMessage: (Subject: string, Message: string) => void;
}
const ShortMessageContext = createContext<ShortMessageContext | undefined>(
  undefined
);
export const ShortMessageProvider = ({ children }: { children: ReactNode }) => {
  const [Mserise, setMserise] = useState<string[][]>([]);
  const addMessage = (Subject: string, Message: string) => {
    const arr = Mserise.concat([
      [cryptoRandomString({ length: 20 }), Subject, Message],
    ]);
    setMserise(arr);
  };

  const value = { addMessage };

  return (
    <ShortMessageContext.Provider value={value}>
      {children}
      {Mserise.map((li) => (
        <InstantMessageCon
          key={li[0]}
          myTempId={li[0]}
          Subject={li[1]}
          Message={li[2]}
          setMserise={setMserise}
        />
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
