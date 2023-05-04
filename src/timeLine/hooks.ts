import { useEffect, useMemo, useCallback } from "react";
import { useTimeLineContext } from "./provider";

const tableWidth = 1000;

export const useTimeLine = () => {
  const { width, setWidth, min, max } = useTimeLineContext();

  const scheduleCellArray = useMemo(() => {
    const len = 2 * (max - min) + 1;
    const tmp = Array.from(new Array(len)).map((_, i) => {
      const hour = min + ((i / 2) | 0);
      const isOcklock = i % 2 === 0;
      return isOcklock ? `${hour}:00` : `${hour}:30`;
    });
    tmp[tmp.length - 1] = `${tmp[tmp.length - 1]}~`;
    return [`~${tmp[0]}`, ...tmp];
  }, [min, max]);

  const minPerPix = (tableWidth / (max - min)) * 60;

  useEffect(() => {
    setWidth((tableWidth / scheduleCellArray.length) | 0);
  }, [scheduleCellArray]);

  return { width, scheduleCellArray, minPerPix };
};
