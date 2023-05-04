import React from "react";
import { useTimeLine } from "../hooks";

type BaseProps = {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
};

type CustomTableProps = BaseProps;
export const CustomTable = (props: CustomTableProps) => {
  const { children = null, width = 2000, height } = props;
  const style = {
    width,
    height,
    borderSpacing: 0,
    borderBottom: "solid 1px #999",
    borderRight: "solid 1px #999"
  };
  return <table style={style}>{children}</table>;
};

type CustomTdProps = BaseProps;

export const CustomTd = (props: CustomTdProps) => {
  const { children = null, width, height, style: styleProp = {} } = props;
  // const { width } = useTimeLine();
  const style = {
    width,
    height,
    borderLeft: "solid 1px #999",
    borderTop: "solid 1px #999",
    ...styleProp
  };
  return <td style={style}>{children}</td>;
};
