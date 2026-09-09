import React from 'react'

const Tabs={
    1:{
        name:"Todo",
        id:1,
        items:[]
    },
    2:{
        name:"doing",
        id:2,
        items:[]
    },
    3:{
        name:"done",
        id:3,
        items:[]
    }
}
const Kanbanboard=()=>{

    const [tabs,setTabs]=React.useState(Tabs)
   

    return (<>
         
  <div>
    {Object.keys(tabs).map((tab)=>

        
            <div>{tabs[tab].name}</div>


    )}
  </div>
    </>)
}


export default Kanbanboard