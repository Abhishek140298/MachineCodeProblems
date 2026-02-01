import React from "react";

const DragAndDrop = () => {
  const [usersList, setUSerList] = React.useState([
    { id: 1, name: "Abhishek Yadav", role: "Software Developer" },
    { id: 2, name: "Manish Kumar", role: "Software Developer" },
    { id: 3, name: "Divyansh Gandhi", role: "Software Developer" },
    { id: 4, name: "Pawan Kumar", role: "Software Developer" },
    { id: 5, name: "Bala Kumar", role: "Software Tester" },
    { id: 6, name: "Mayank Nigam", role: "Software Tester" },
    { id: 7, name: "Raghram ", role: "Product Manager" },
  ]);

const [draggedItem,setDraggedItem]=React.useState({})
const [elibleUser,setEligibleUserList]=React.useState([])

const handleDragStart=(e,user)=>
{
  
    setDraggedItem(prev=>user)
}

const hanldeDragOver=(e)=>{
    e.preventDefault()
}

const handleDrop=(e)=>{

setEligibleUserList(prev=>[...prev,draggedItem])
}
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100vh",
        width: "95vw",
        padding: "10px",
      }}
    >
      <div
        style={{
          width: "50vw",
          display: "flex",

          borderRight: "solid 1px black",
          
          flexDirection: "column",
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        USers
        {usersList?.map((user, index) => (
          <div
            style={{
              width: "90px",
              height: "50px",
              background: "blue",
              margin: "10px",
              cursor: "pointer",
            }}
            draggable

            onDragStart={(e)=>handleDragStart(e,user)}
            key={user?.id}
          >
            {user?.name}
          </div>
        ))}
      </div>
      <div
        style={{
          width: "50vw",
          display: "flex",
          justifyContent: "center",
          borderRight: "solid 1px black",
          
          flexDirection: "column",
         
          alignItems:'center'
         
        }}
        onDragOver={hanldeDragOver}
        onDrop={handleDrop}
      >
        Add Eligible Users
        {elibleUser?.map((eligible,value)=><div
          style={{
            width: "90px",
            height: "50px",
            background: "blue",
            margin: "10px",
           
          }}
        key={eligible?.id}
          >{eligible?.name}</div>)}
      </div>
    </div>
  );
};

export default DragAndDrop;
