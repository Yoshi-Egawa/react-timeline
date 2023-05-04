import { CustomTd } from "./table";

import { useTimeLine } from "../hooks";
import { DataGroup } from "../types";

export type RowProps = {
  dataGroup: DataGroup;
};

export default function Row(props: RowProps) {
  const { dataGroup } = props;
  const { scheduleCellArray } = useTimeLine();
  return (
    <tr>
      <CustomTd width={100}>{dataGroup.label}</CustomTd>
      {scheduleCellArray.map(() => (
        <CustomTd />
      ))}
    </tr>
  );
}
