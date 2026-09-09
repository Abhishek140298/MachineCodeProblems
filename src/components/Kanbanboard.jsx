import React from "react";

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
  const [tabs, setTabs] = React.useState(Tabs);


  const onDragStart=()=>{

  }

  const onDrag=()=>{

  }
  const onDragEnd=()=>{

  }
  return (
    <>
      <div style={{display:'flex',justifyContent:'space-between',width:'90vw',alignItems:'center',height:'100vh',padding:'20px',margin:'20px'}}>
        {Object.keys(tabs).map((tab) => (
          <div style={{ width: "300px", border: "1px black solid",height:'300px' }}>
            <h4>{tabs[tab]?.name?.toUpperCase()}</h4>
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
