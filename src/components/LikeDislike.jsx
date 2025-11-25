import React, { useState, useEffect } from "react";

export default function LikeDislike() {
    const user="user4"
    const [totalLiked,setLiked]=useState({})

const [totlaCountLikeDislike,setTotalCount]=useState(0)
useEffect(()=>{
setTotalCount(Object.keys(totalLiked).length)
    
},[totalLiked])
    const handleButtonClick=()=>{
        if(totalLiked[user]){
            console.log("totalLiked",totalLiked)

         return   setLiked({
                ...totalLiked,
                [user]: {
                  
                  liked: !totalLiked[user].liked
                }
              });        }
              setLiked({
                ...totalLiked,
                [user]: {
                  
                  liked: true
                }
              }); 
        
    }
  return <div>Hello this is my post 

    <button onClick={handleButtonClick}>{totalLiked[user]?.liked?"Liked":"Disliked"}</button>
    <span>Total LikesAndDislikesPerUser {totlaCountLikeDislike}</span>
  </div>;
}
