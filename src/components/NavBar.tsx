import "../css/NavBar.css";
import { FaUserCircle } from "react-icons/fa";
const userIcon = <FaUserCircle />;

interface Props {
  setclickedIndices: any;
  setGridSize: any;
  gridSize: number;
}

const NavBars = ({ setclickedIndices, setGridSize, gridSize }: Props) => {
  console.log(gridSize);
  return (
    <>
      <div className="navbars">
        <div className="nav-comps">
          <span className="logo">PowerBi</span>
          <span className="a">
            Select grid:
            <select className="grid-size"  onChange={(event) => {setGridSize(parseInt(event.target.value))}} >
              <option value={2} >2x2</option>
              <option value={3}>3x3</option>
            </select>
          </span>
          <span className="a2">
            <button
              className="resetBtn"
              onClick={() => {
                console.log("clicked");
                setclickedIndices([]);
              }}
            >
              Reset
            </button>
            <span className="user-icon">{userIcon}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default NavBars;
