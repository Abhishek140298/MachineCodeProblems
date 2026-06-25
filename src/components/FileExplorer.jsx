// import React from "react";

// //Navigation with nested Items

// const navItems = [
//   { name: "Home" },
//   {
//     name: "Subscription",
//     subNav: [{ name: "Monthly" }, { name: "Yealy" }, { name: "lifetime" }],
//   },
//   { name: "Mysubcriptions" },
//   { name: "payment", subNav: [{ name: "online" }, { name: "offline" }] },
// ];

// function NavTab({ items }) {
//   const [openCurrent, setOpenCurrent] = React.useState(null);
//   const handleOpenMenu = (index) => {
//     setOpenCurrent(prev=>prev!==index?index:null);
//   };
//   return (
//     <>
//       {items?.map((item, index) => {
//         if (item.subNav) {
//           return (
//             <>
//               <div onClick={() => handleOpenMenu(index)}>
//                 {item.name}
//                 {openCurrent == index ? "▲" : "▼"}
//               </div>

//               {openCurrent == index ? <NavTab items={item?.subNav} /> : null}
//             </>
//           );
//         } else {
//           return <div key={index}>{item.name}</div>;
//         }
//       })}
//     </>
//   );
// }

// export default function NavigationBar() {
//   return (
//     <div style={{display:'flex'}}>
//       <NavTab items={navItems} />
//     </div>
//   );
// }
// import React ,{useState}from 'react'
// import folderStructure from '../fileexplorerData.json'

// const TreeNode=({node})=>{
//   const [expanded,setExpanded]=useState(false)
//   const handleExpand=()=>{
// setExpanded(prev=>!prev)
//   }

//     if(node.type==="folder"){return(
// <div>
// <div onClick={handleExpand}>{node.name} +</div>
//     { expanded&& node.children?.map((child,text)=><>
     
//       <TreeNode  node={child}/></>)}
//       </div>)
//     }
//     else{
//       console.log("Hi ther",node.name)

//       return<div>{node.name }-</div>
//     }

// }

// const FileExplorer=()=>{

//   console.log("Folfder Strucutre",folderStructure)
//   return(<div><TreeNode node={folderStructure}/></div>)
// }

// export default FileExplorer

import React ,{useEffect,useState} from 'react'

import folderData from '../fileexplorerData.json'
//item={a:b,c:d}
// {...item,...(true&&{child:[]})}

const insertNode=(node,targetID,itemTyep)=>{
  
}

const TreeNode=({node})=>{
const [expanded,setExpanded]=useState(false)
const [openInput,setOpenInput]=useState(false)

const handleExpandFolder=(e)=>{
  //Event prapogation is important because it it is firing parent event ,which causing parent to close 
  e.stopPropagation()
  setExpanded(prev=>!prev)
}
const addFolder=( )=>{
  console.log("Id",foderId)
  setOpenInput(true)
  console.log("FOlder",folder)

}

const handleSubmit=()=>{

}
  if(node.type="folder"){
      return <div onClick={handleExpandFolder}>
        <h3>{node.name}</h3>
        <span onClick={addFolder}>+</span>
        {openInput&&<input type="text"/>}
        {expanded&&node.children?.map((child,index)=><TreeNode node={child}/>)}
      </div>
  }
  else{
      return <div><h6>{node.name}</h6>
     </div>
  }
}


const FileExplorer=()=>{
  const [folder,setFolder]=useState(folderData)



   return <>
   
   <div>
<TreeNode node={folder} addFolder={addFolder}/>
   </div>
   </>
}


export default FileExplorer