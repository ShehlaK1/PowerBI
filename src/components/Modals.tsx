import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../css/Graph.css";

interface Props {
  graphs: string;
  setGraph: any;
}
function Modals({ graphs, setGraph }: Props) {
  const [show, setShow] = useState(false);
  // const [graph, setGraph] = useState("graph value");

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      {!graphs && <Button
        onClick={handleShow}
        style={{ backgroundColor: "darkcyan", borderColor: "darkcyan" }}
      >
        Plot a graph
      </Button> }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Plot a graph</Modal.Title>
        </Modal.Header>
        <Modal.Body>Choose either bar graph or line graph</Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "darkcyan", borderColor: "darkcyan" }}
            onClick={() => {
              setGraph("bar");
              handleClose();
            }}
          >
            Bar Graph
          </Button>
          <Button
            style={{ backgroundColor: "darkcyan", borderColor: "darkcyan" }}
            onClick={() => {
              setGraph("line");
              handleClose();
            }}
          >
            Line Graph
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
