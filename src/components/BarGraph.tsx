import { useContext } from "react";
import { GraphContext } from "../App";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Cell,
} from "recharts";

interface Props {
  Array: { name: string; students: number; fees: number }[];
}

const BarGraph = ({ Array }: Props) => {
  const { clickedIndices, toggleIndex } = useContext(GraphContext);

  const handleClick = (index: any) => {
    toggleIndex(index);
  };

  return (
    <>
      <ResponsiveContainer width={320} height={150}>
        <BarChart data={Array}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "cyan" }} />
          <Legend />
          <Bar
            type="monotone"
            dataKey="students"
            fill="darkcyan"
          >
            {Array.map((_entry, index) => (
              <Cell
                cursor="pointer"
                fill={
                  clickedIndices.includes(index) ? "darkblue" : "darkcyan"
                }
                key={`cell-${index}`}
                onClick={() => {handleClick(index)}}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarGraph;
