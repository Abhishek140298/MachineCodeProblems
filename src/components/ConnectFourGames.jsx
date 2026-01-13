import React from "react";
const ROWS = 6;
const COLS = 7;
const ConnectFourGames = () => {
  let total = ROWS * COLS;
  return (
    <div style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div
      style={{
        display: "flex",
        width: "340px",
        height: "400px",
        flexWrap: "wrap",
        background:'green'
      }}
    >
      {Array.from({ length: total }).map((_, index) => (
        <div
          style={{
            background: "red",
            width: "50px",
            height: "50px",
            border: "1px solid black",
            margin:'2px',
            cursor:'pointer'
          }}
          onClick={()=>console.log("Index",index)}
        >
          
        </div>
      ))}
    </div></div>
  );
};

export default ConnectFourGames;
