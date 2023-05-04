import React, { useState, useContext, createContext } from "react";

type contextType = {
  min: number;
  max: number;
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
};

type TimeLineProviderProps = {
  min?: number;
  max?: number;
  children: React.ReactNode;
};

const Context = createContext({} as contextType);

export const useTimeLineContext = () => useContext(Context);

export function TimeLineProvider(props: TimeLineProviderProps) {
  const { min = 8, max = 21, children } = props;
  const [width, setWidth] = useState(10);
  const value = {
    width,
    setWidth,
    min,
    max
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
