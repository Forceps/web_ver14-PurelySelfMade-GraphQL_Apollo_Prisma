import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import InstantMessageCon from "./InstantMessage/InstantMessageCon";
import cryptoRandomString from "crypto-random-string";
import { useDummyState } from "../../Lib/DummyState";

interface ShortMessageContext {
  addMessage: (Subject: string, Message: string) => void;
}
const ShortMessageContext = createContext<ShortMessageContext | undefined>(
  undefined
);
export const ShortMessageProvider = ({ children }: { children: ReactNode }) => {
  const { setDummyState } = useDummyState();
  const [Mserise, setMserise] = useState<string[][]>([]);
  const [DeleteTarget, setDeleteTarget] = useState("");
  const addMessage = (Subject: string, Message: string) => {
    const arr = Mserise.concat([
      [cryptoRandomString({ length: 20 }), Subject, Message],
    ]);
    setMserise(arr);
  };

  useEffect(() => {
    const idx = Mserise.findIndex((i) => {
      return i[0] === DeleteTarget;
    });
    let newArr = Mserise;
    newArr.splice(idx, 1);
    setMserise(newArr);
    setDummyState((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DeleteTarget]);
  useEffect(() => {
    const Boxes = document.getElementsByClassName(
      "instantMessageBox"
    ) as HTMLCollectionOf<HTMLDivElement>;
    for (let i = 0; i < Boxes.length; i++) {
      Boxes[Boxes.length - i - 1].style.bottom = `${40 + 160 * i}px`;
    }
  }, [Mserise]);

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
          setDeleteTarget={setDeleteTarget}
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
