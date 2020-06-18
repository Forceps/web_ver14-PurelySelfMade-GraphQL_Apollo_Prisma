import React, { createContext, useState, ReactNode, useContext } from "react";

interface PostDetailContext {
  DummyState: number;
  setDummyState: any;
}

const DummyStateCtx = createContext<PostDetailContext | undefined>(undefined);

export const DummyStateProvider = ({ children }: { children: ReactNode }) => {
  const [DummyState, setDummyState] = useState(0);
  const Obj = {
    DummyState,
    setDummyState
  };
  return (
    <DummyStateCtx.Provider value={Obj}>{children}</DummyStateCtx.Provider>
  );
};

/*이것은 특정 데이터가 바뀔 때 해당 컴포넌트를 useEffect를 사용하여 강제리렌더링 시키고 싶을 때 사용된다. useEffect안에 setDummyState(p => p+1)를 넣어주자. 예컨데
아래와 같이 사용한다.

useEffect(() => {
  DS.setDummyState((p: number) => p + 1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [PD]);
*/

export const useDummyState = () => {
  const state = useContext(DummyStateCtx);
  if (!state) throw new Error("DummyState not found");
  return state;
};
