import React from "react";

const LightBox = ({
    name="Harry Potter",
    image="https://picsum.photos/200/300?random=1",
    rating="4/5",
    description="Magic based movie by me"

}) => {
  return (
    <div
      style={{
        position: "absolute",
        right: "50%",
        left: "40%",
        top: "10%",
       
        zIndex: "1",
        height:'50vh'
      }}
    >
         <div>
            <h1>{name}</h1>
            <img src={image} alt={name}/>
            <span>{description}</span>
            <br/>
            <span>Rating:{rating}</span>
         </div>
    </div>
  );
};

export default LightBox;
