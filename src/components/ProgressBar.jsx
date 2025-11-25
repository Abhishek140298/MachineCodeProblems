import React from "react";

export default function ProgressBar({progress}) {
  return (
    <div
      style={{
        background: "white",
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Your Progress Detail</h3>
      <div
        style={{
          width: "50%",
          height: "2%",
          marginLeft: "10px",
          borderRadius: "5px",
          background: `linear-gradient(to right, green ${progress}%, lightgrey ${progress}%)`,
          
        }}
      >
        {/*In the gradient if the first % tells the browser where the 
        first colour ends and second tells where the second color starts and if % different then in between blured affect */}
        {/* <div style={{background:'green',width:'50%',height:'100%',display:'flex',justifyContent:'left'}}></div> */}
        {progress}%
      </div>
    </div>
  );
}
