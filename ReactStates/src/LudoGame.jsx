import { useState } from "react";
import React from "react";
export const LudoGame = () => {
  let [moves, setMoves] = useState({ yellow: 0, red: 0, green: 0, blue: 0 });
  return (
    <>
      <div className="board">
        <p>Yellow Moves :{moves.yellow} </p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={() => setMoves({ ...moves, yellow: moves.yellow + 1 })}
        >
          +1
        </button>
        <p>Red Moves : {moves.red} </p>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setMoves({ ...moves, red: moves.red + 1 })}
        >
          +1
        </button>
        <p>Green Moves : {moves.green} </p>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => setMoves({ ...moves, green: moves.green + 1 })}
        >
          +1
        </button>
        <p>Blue Moves : {moves.blue} </p>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => setMoves({ ...moves, blue: moves.blue + 1 })}
        >
          +1
        </button>
      </div>
    </>
  );
};
export default LudoGame;
