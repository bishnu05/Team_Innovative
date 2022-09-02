import Draggable from "react-draggable";
import "./App.css";

import { StopWatch } from "./Components/StopWatch";

function App() {
  return (
    <Draggable>
      <div className="App">
        <StopWatch />
      </div>
    </Draggable>
  );
}

export default App;
