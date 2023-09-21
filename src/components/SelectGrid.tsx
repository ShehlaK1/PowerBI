import "../App.css";
import Graph from "./Graph";
interface Props {
  gridSize: number;
}



  const SelectGrid = ({gridSize}: Props) => {
    const grid: any = [];

  for (let i = 0; i < gridSize; i++) {
    const row: any = [];
    for (let j = 0; j < gridSize; j++) {
      row.push(
      <div className="graph-ind"><Graph key={`${i}-${j}`} /></div>);
    }
    grid.push(row);
  }
    return (
      <>
        <div className="display-graph">
          {grid.map((row: any, rowIndex: number) => (
            <div key={rowIndex} className="row">
              {row}
            </div>
          ))}
        </div>
      
      </>
    );
  };


export default SelectGrid;
