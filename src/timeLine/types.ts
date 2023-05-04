import React from "react";

export type Data = {
  id: string | number;
  label: string;
  from: Date;
  to: Date;
  popOver?: React.FC;
};

export type DataGroup = {
  id: string | number;
  label: string;
  data: Data[];
};
