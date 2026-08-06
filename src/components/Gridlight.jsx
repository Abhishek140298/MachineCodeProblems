import React, { useEffect, useState ,useRef}  from "react";
// import { useToast } from "./ToastNotification";


const grid=[[0,0,0],[0,0,0],[0,0,0]]

const GridLight=()=>{
    const [grids,setGrids]=useState()
    const order=useRef([])
    useEffect(()=>{
     setGrids(grid.flat())
    },[])
const toast=useToast()
useEffect(()=>{
    toast.success("I am success")
},[])

    const handleClick=(index)=>{
        setGrids(prev=>{
            let updated=[...prev]
            updated[index]=1
            return updated
        })
        console.log("i",order.current)
        order.current.push(index)

    }

    const removeColorInorder=()=>{
        console.log("hcgh",order)
        for(let i=0;i<grids?.length;i++){
       setTimeout(()=>{
        const last=order.current.pop()
        setGrids(prev=>{
          const update=[...prev]
          update[last]=0
          return update
        })
       },i*1000)
        }
    }

    //Use SetINinterval 
    useEffect(()=>{
        let timer
        console.log("hfdjsbkn;",order)

        if(order?.current?.length===grids?.length){
            console.log("hfdjsbkn;",order)

   
            removeColorInorder()

           
        }

        return ()=>{clearTimeout(timer)}
    },[grids])
    return <div>
<div style={{height:"30vh",width:"20vw",border:'1px solid black' ,margin:"60px", display:'grid',gridTemplateColumns:`repeat(${grid[0].length}, 80px)`}}>
  {grids?.map((val,index)=>{
         return <div style={{border:"1px solid black", background:`${val?"green":"red"}`}}  onClick={()=>handleClick(index)}></div> 
  })}

</div>
      

    </div>
}

export default GridLight