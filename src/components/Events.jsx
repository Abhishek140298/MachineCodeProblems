import React from 'react'

const Events=()=>{
    return (<div
        // onClickCapture={() => console.log("Parent Capture")}
        onClick={(e) => console.log("Parent Bubble",e.target,e.currentTarget)}
        style={{ padding: "40px", border: "2px solid black" }}>


        <button  
      >Click me</button>
    </div>)
}

export default Events

