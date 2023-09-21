import "./App.css";
import NavBar from "./components/NavBar";
import {createContext, useState} from "react";
import SelectGrid from "./components/SelectGrid";

export const GraphContext =  createContext<{
  clickedIndices: number[];
  toggleIndex: (index: number) => void;
}>({
  clickedIndices: [],
  toggleIndex: () => {},
});
function App() {
  const [clickedIndices, setclickedIndices] = useState<number[]>([]);
  const [gridSize, setGridSize] = useState(2);
  const toggleIndex = (index:any) => {
    setclickedIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((clickedIndex) => clickedIndex !== index)
        : [...prevIndices, index]
    )
  };
  {console.log(gridSize)}
  return (
      <>
    <GraphContext.Provider  value={{clickedIndices, toggleIndex}}>

      <NavBar setclickedIndices={setclickedIndices} setGridSize={setGridSize} gridSize={gridSize}/>
     

      <div>
       <SelectGrid gridSize={gridSize}></SelectGrid>
      </div>
    </GraphContext.Provider>
    </>
  );
}
export default App;
