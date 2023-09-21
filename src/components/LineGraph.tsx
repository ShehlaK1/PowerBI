import { useContext} from "react";
import { GraphContext } from "../App";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface Props {
  Array: { name: string; students: number; fees: number }[];
}

const LineGraph = ({ Array }: Props) => {
  const { clickedIndices, toggleIndex } = useContext(GraphContext);

  const handleClick = (index: number) => {
   toggleIndex(index);
  };

  const CustomizedDot = ({ cx, cy, index }: { cx: number; cy: number; index: number }) => (
    <circle
      onClick={() => {
        handleClick(index);
      }}
      r={10}
      key={`cell-${index}`}
      fill={clickedIndices.includes(index) ? "darkblue" : "darkcyan"}
      cx={cx}
      cy={cy}
    />
  );

  return (
    <>
      <ResponsiveContainer width={320} aspect={3} margin-left="5px" margin-right="3px">
        <LineChart data={Array} width={700}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "cyan" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="students"
            stroke="darkcyan"
            activeDot={
             { r:10
            }
            }
            cursor="pointer"
            dot={({ cx, cy, index }) => (
              <CustomizedDot cx={cx} cy={cy} index={index} />
            )}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineGraph;
