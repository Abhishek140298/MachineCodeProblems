import React, { useState } from "react";

const buttonStyle = {
  background: "pink",
  margin: "5px",
};

const Counter = ({setProgress}) => {
  const [count, setCount] = useState(0);
  const [emojis, setEmojis] = useState([]); // store flying emojis

  const handleCount = (type) => {
    // if (count >= 0)
    //   type === "reset"
    //     ? setCount(0)
    //     : type == "increment"
    //     ? setCount(count + 1)
    //     : count > 0
    //     ? setCount(count - 1)
    //     : null;
    const newEmoji = type === "increment" ? "😂" : type === "decrement"&& count>0? "😭" : "";
    if (newEmoji) {
        // Create a new flying emoji with random horizontal position
        const id = Date.now();
        setEmojis((prev) => [
          ...prev,
          { id, emoji: newEmoji, left: Math.random() * 80 + 10 }, // random 10%–90%
        ]);
  
        // Remove after animation (1.5s)
        setTimeout(() => {
          setEmojis((prev) => prev.filter((e) => e.id !== id));
        }, 1500);
      }
//     setCount((prev) => {
//         if (type === "increment") {
//           setEmoji("😂"); // laughing emoji
//           return prev + 1;
//         } else if (type === "decrement") {
//           setEmoji("😭"); // crying/flying tears emoji
//           return prev - 1;
//         } else {
//           setEmoji("");
//           return 0;
//    } })
  // Update count
  setCount((prev) => {
    if (type === "increment") return prev + 1;
    if (type === "decrement"&&count>0) return prev - 1;
    return 0;
  });
  setProgress((prev) => {
    if (type === "increment") return prev + 1;
    if (type === "decrement"&&count>0) return prev - 1;
    return 0})
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        background: "white",
      }}
    >
      <h1>Counter</h1>
      <h3
        style={
          {
            // display: "inline-block",
            // whiteSpace: "nowrap",
            // animation: "move 5s linear infinite",
            // textAlign:'left'
            // transform: `translateX(${count * 10}px)`,
            // transition: "transform 0.3s ease",
            whiteSpace: "nowrap",
          }
        }
      >
      Count {count} 
      </h3>
      <button style={buttonStyle} onClick={() => handleCount("increment")}>
        Increment
      </button>
      <button style={buttonStyle} onClick={() => handleCount("decrement")}>
        Decrement
      </button>
      <button style={buttonStyle} onClick={() => handleCount("reset")}>
        Reset
      </button>
            {/* Flying emojis */}
            {emojis.map((item) => (
        <span
          key={item.id}
          style={{
            position: "absolute",
            bottom: "0px",
            left: `${item.left}%`,
            fontSize: "2rem",
            animation: "flyUp 1.5s ease-out forwards",
          }}
        >
          {item.emoji}
        </span>
      ))}

      {/* <style>
        {`
          @keyframes move {
            0% { transform: translateX(0); }
            100% { transform: translateX(100%); }
          }
        `}
      </style> */}
        {/* Animation style */}
        <style>
        {`
          @keyframes flyUp {
            0% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
            50% {
              transform: translateY(-50vh) scale(1.3);
              opacity: 0.9;
            }
            100% {
              transform: translateY(-100vh) scale(0.8);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Counter;
