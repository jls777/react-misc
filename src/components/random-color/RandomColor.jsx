import { useState } from "react";
import "./styles.css";
import hex from "./data";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#777777");

  function handleHexColor() {
    let randomColor = "";
    for (let i = 0; i < 6; i++) {
      let randomNum = Math.floor(Math.random() * hex.length);
      randomColor = randomColor + hex[randomNum];
    }
    setColor("#" + randomColor);
  }

  function handleRGBColor() {
    const randomNum1 = Math.floor(Math.random() * 256);
    const randomNum2 = Math.floor(Math.random() * 256);
    const randomNum3 = Math.floor(Math.random() * 256);
    setColor(`rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "70rem",
          height: "70rem",
          backgroundColor: color,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            padding: "50px",
            marginBottom: "50px",
          }}
        >
          <button className="random-btn" onClick={() => setTypeOfColor("hex")}>
            Create Hex Color
          </button>
          <button className="random-btn" onClick={() => setTypeOfColor("rgb")}>
            Create RGB Color
          </button>
          {typeOfColor === "hex" && (
            <button className="random-btn" onClick={handleHexColor}>
              Generate Random Color
            </button>
          )}
          {typeOfColor === "rgb" && (
            <button className="random-btn" onClick={handleRGBColor}>
              Generate Random Color
            </button>
          )}
        </div>
        <p
          style={{
            fontSize: "7rem",
            textAlign: "center",
          }}
        >
          {color}
        </p>
      </div>
    </div>
  );
}

export default RandomColor;
