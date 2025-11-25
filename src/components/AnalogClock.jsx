import React, { useEffect, useState } from "react";

const AnalogClock = () => {
const [deg,setDegree]=useState(0)
const [time,setTime]=useState(new Date())
const hours=time.getHours()
const minuteHand=time.getMinutes()
const secondHand=time.getSeconds()

const secondDeg=(secondHand/60)*360-90
const minuteDegree=((minuteHand/60)*360)+(secondHand*(1/10))-90
const hourDeg = (hours % 12 / 12) * 360 + (minuteDegree / 60) * 30-90
useEffect(()=>{
  const internal=  setInterval(() => {
      setTime(()=>new Date())
    }, 1000);
    return ()=> clearInterval(internal)
},[])


    const handStyle=(deg,width,color)=>({
        width:width,
        height:'1px',
        backgroundColor: color,
        position: "absolute",
       top:'50%',
       left:'50%',
        transformOrigin: "0% 50%",//Origin from the x and y axis  form it's width
        transform: `rotate(${deg}deg)`,//rotate the division in clockwise
        borderRadius: "2px",
        transition: "transform 0.05s ease-in-out",//controls how smoothly the hand moves when its rotation (transform) changes.
        //transition: property duration timing-function;
        /*ease-in-out:

         Starts slow

        Speeds up in the middle

        Slows down at the end */
    })

  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100vw',height:'100vh'}}>
      <h1>Analog Clock</h1>
      <div style={{width:'200px',height:'200px',border:'1px solid black',borderRadius:'50%',  position: "relative",}}>
        {/*For perfect circle the height and width should be equal */}
         <div style={handStyle(hourDeg, "50px", "black")} />
      
       <div style={handStyle(minuteDegree, "70px", "gray")} />
      <div style={handStyle(secondDeg, "90px", "red")} />
   

      </div>
    </div>
  );
};

export default AnalogClock;
