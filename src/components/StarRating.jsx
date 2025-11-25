import React, { useState } from "react";

const StarRating = () => {
  const totalStar = 5;
  const [rating, setRating] = useState(0);

  const handleStarRating = (rate) => {
    setRating((prev) => rate + 1);
    if (rate === 0 && rating === 1) setRating(0);
  };

  return (
    <div>
      <h3>Rate My Blog</h3>
      {/* <i className="fa-solid fa-star star-icon" style={{ color: "yellow", fontSize: "24px" }}></i>  
   
      <div className="star-container">
      {/* Background empty star *
      <i className="fa-regular fa-star star-back"></i>
      {/* Half filled star on top *
      <i className="fa-solid fa-star star-front"></i>
      <i className="fa-solid fa-star-half-stroke" style={{ color: "gold", fontSize: "24px" }}></i> */}
      {Array.from({ length: totalStar }).map((_, index) => (
        <i
          className={`${
            index + 1 <= rating ? "fa-solid" : "fa-regular"
          } fa-star star-back`}
          style={{ color: "gold" }}
          onClick={() => handleStarRating(index)}
        ></i>
      ))}
    </div>
  );
};

export default StarRating;
