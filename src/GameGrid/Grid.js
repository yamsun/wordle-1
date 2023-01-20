import React from "react";

function Grid({ gridNum, setGridNum, gridIndex }) {
  const [textIn, setTextIn] = React.useState("");
  let theWord = "MONTH";
  theWord = theWord.toUpperCase();
  function handleEnterPress() {
    if (textIn.toUpperCase() == theWord) {
      alert("Yay! you won..");
    } else {
      textIn
        .toUpperCase()
        .split("")
        .forEach((i, index) => {
          if (theWord.includes(i)) {
            if (index === theWord.indexOf(i)) {
              document.getElementById(
                `box-${gridIndex}-${index}`
              ).style.backgroundColor = "lightgreen";
            } else {
              document.getElementById(
                `box-${gridIndex}-${index}`
              ).style.backgroundColor = "yellow";
            }
            console.log("inside iff");
          } else {
            document.getElementById(
              `box-${gridIndex}-${index}`
            ).style.backgroundColor = "lightgray";
            console.log("inside else");
            console.log("i is", i);
          }
        });
    }
    if (gridNum === 6) {
      alert("0 attempts left");
      return;
    }
    setGridNum(gridNum + 1);
  }
  return (
    <div style={{ margin: 20 }}>
      {/* <div>The Word - {theWord}</div> */}
      <input
        // style={{ display: "none" }}
        display="none"
        type="text"
        maxLength="5"
        value={textIn}
        onChange={(e) => {
          setTextIn(e.target.value);
        }}
        autoFocus
      />
      <button
        style={{ margin: 4, backgroundColor: "skyblue" }}
        disabled={textIn.length < 5}
        onClick={handleEnterPress}
      >
        Enter
      </button>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {textIn
          .toUpperCase()
          .padEnd(5, " ")
          .slice(-5)
          .split("")
          ?.map((i, index) => {
            return (
              <div
                key={index}
                id={`box-${gridIndex}-${index}`}
                style={{
                  // display: "inline",
                  border: "2px solid black",
                  margin: 1,
                  padding: 2,
                  innerWidth: "200px",
                  height: "25px",
                  width: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {i}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Grid;
