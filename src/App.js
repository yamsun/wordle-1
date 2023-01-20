import React from "react";
import "./App.css";
import Grid from "./GameGrid/Grid";

function App() {
  const [gridNum, setGridNum] = React.useState(1);
  const nTimes = [];
  for (let i = 0; i < gridNum; i++) {
    nTimes.push("a");
  }

  console.log("gridNum", gridNum);
  console.log("nTimes", nTimes);

  return (
    <div className="App">
      {nTimes?.map((i, ind) => {
        return (
          <Grid
            gridNum={gridNum}
            key={ind}
            gridIndex={ind}
            setGridNum={setGridNum}
          />
        );
      })}
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
