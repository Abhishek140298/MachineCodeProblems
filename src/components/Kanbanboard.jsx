import React, { useEffect, useState } from "react";

/**
 * *Create the columns
 * *Create ,delete ,edit  card in the columns
 * *Reordering of card within the card
 * *Drag and drop the card in the other column
 * *Delete the Columns
 *
 *
 *
 */
const Tabs = {
  1: {
    name: "Todo",
    id: 1,
    items: [],
  },
  2: {
    name: "doing",
    id: 2,
    items: [],
  },
  3: {
    name: "done",
    id: 3,
    items: [],
  },
};
const Kanbanboard = () => {
  const [columns, setColumns] = useState([]);
  const [openInput, setInputOpen] = useState(false);
  const[columnName,setColumn]=useState()

  const onDragStart = () => {};

  const onDrag = () => {};
  const onDragEnd = () => {};

  const createColumns = () => {

    setInputOpen(prev=>!prev)
  };

  const addColumn = () => {};

  const handleColumnName = (event) => {
   setColumn(event.target.value)

  };

  const hanldeAddColumns=()=>{

    setColumns(prev=>{
        let ID=prev?.length===0?0:prev[prev.length-1]?.id+1
        return[...prev,{name:columnName,id:ID}]})

        setColumn("")
  }

  useEffect(() => {}, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",

          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "grey",
            width: "100%",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <h1> Assignment Board</h1>
          <button
            style={{
              height: "60px",
              width: "content-fit",
              background: "green",
              cursor: "pointer",
              margin: "0px 20px 0px 0px",
            }}
            onClick={createColumns}
          >
            Create Board +
          </button>
        </div>
        {openInput && (
          <div>
            <input
              type="text"
              name="columnname"
              placeholder="Enter the Column name"
              onChange={handleColumnName}
              value={columnName}
            />
            <button onClick={hanldeAddColumns}>Add </button>
          </div>
        )}

      
{console.log("Colu",columns)}
         {columns?.map((tab) => (
          <div
            style={{
              width: "300px",
              border: "1px black solid",
              height: "300px",
            }}
          >
            <h4>{tab?.name?.toUpperCase()}</h4>
            <ul>
              <li>Hey</li>
              <li>Do</li>
            </ul>
          </div>
        ))} 
      </div>
    </>
  );
};

export default Kanbanboard;
