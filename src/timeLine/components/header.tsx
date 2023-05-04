import { CustomTd } from "./table";

import { useTimeLine } from "../hooks";

export default function Header() {
  const { scheduleCellArray } = useTimeLine();
  return (
    <thead>
      <tr>
        <CustomTd />
        {scheduleCellArray.map((label) => (
          <CustomTd>{label}</CustomTd>
        ))}
      </tr>
    </thead>
  );
}
