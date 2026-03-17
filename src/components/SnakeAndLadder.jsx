import React from "react";

function SnakeAndLadder({ cells = 100, maxNumberPlayers = 4 }) {
  const [players, setPlayer] = React.useState([]);
  const [playerName, setPlayerName] = React.useState();

  console.log("Cells", cells);
  const size = Math.ceil(Math.sqrt(cells));
  return (
    <div>
      {console.log("Player name", playerName, players.length)}
      <h1>Snake And Ladder game</h1>
      {players?.map((name, i) => (
        <div>{name}</div>
      ))}
      {players?.length < maxNumberPlayers ? (
        <div style={{ margin: "10px" }}>
          <button
            onClick={() => {
              setPlayer((prev) => [...prev, playerName]);
       
            }
        
        }
          >
            Add Player{" "}
          </button>
          <input
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Add Player Name"
          />
        </div>
      ) : null}
      <div
        style={{ display: "grid", gridTemplateColumns: `repeat(${size},1fr)` }}
      >
        {new Array(cells).fill(0).map((_, i) => (
          <div
            style={{
              textAlign: "center",
              width: "3vw",
              height: "3vw",
              border: "1px solid black",
            }}
          >
            {cells - i}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SnakeAndLadder;
