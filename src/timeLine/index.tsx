import Header from "./components/header";
import Row from "./components/row";
import { CustomTable } from "./components/table";

import { TimeLineProvider } from "./provider";
import { DataGroup } from "./types";

const initialDataGroup: DataGroup[] = [
  {
    id: "hoge",
    label: "hoge",
    data: [
      {
        id: "test",
        label: "test",
        from: new Date("2023/05/04 09:00:00"),
        to: new Date("2023/05/04 10:00:00")
      }
    ]
  }
];

export type TimeLineProps = {
  withHeader?: boolean;
  dataGroup: DataGroup[];
};

export default function TimeLine(props: TimeLineProps) {
  const { withHeader = true, dataGroup = initialDataGroup } = props;
  return (
    <TimeLineProvider>
      <CustomTable>
        {withHeader ? <Header /> : null}
        <tbody>
          {dataGroup.map((d) => (
            <Row key={d.id} dataGroup={d} />
          ))}
          {/* <Row /> */}
        </tbody>
      </CustomTable>
    </TimeLineProvider>
  );
}
