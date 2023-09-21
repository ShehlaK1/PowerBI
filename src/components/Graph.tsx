import LineGraph from "./LineGraph";
import { useState} from "react";
import "../css/Graph.css";
import BarGraph from "./BarGraph";
import Modals from "./Modals";

const Array = [
  { name: ".NET", students: 20, fees: 10 },
  { name: "Python", students: 30, fees: 10 },
  { name: "Javascript", students: 15, fees: 20 },
  { name: "C#", students: 5, fees: 3 },
  { name: "C++", students: 50, fees: 90 },
];


const Graph = () => {
  const [graph, setGraph] = useState("");
  return (
    <>
        <Modals setGraph={setGraph} graphs={graph} />
        {graph === "line" ? (
          <div className="graphing">
            <LineGraph Array={Array} />
          </div>
        ) : graph === "bar" ? (
          <div className="graphing">
            <BarGraph Array={Array} />
          </div>
        ) : null}
    </>
  );
};


export default Graph;


