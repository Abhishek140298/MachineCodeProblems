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

// import React ,{useEffect,useState} from 'react'

// import folderData from '../fileexplorerData.json'
// //item={a:b,c:d}
// // {...item,...(true&&{child:[]})}

// const insertNode=(node,targetID,itemTyep)=>{

// }

// const TreeNode=({node})=>{
// const [expanded,setExpanded]=useState(false)
// const [openInput,setOpenInput]=useState(false)

// const handleExpandFolder=(e)=>{
//   //Event prapogation is important because it it is firing parent event ,which causing parent to close
//   e.stopPropagation()
//   setExpanded(prev=>!prev)
// }
// const addFolder=( )=>{
//   console.log("Id",foderId)
//   setOpenInput(true)
//   console.log("FOlder",folder)

// }

// const handleSubmit=()=>{

// }
//   if(node.type="folder"){
//       return <div onClick={handleExpandFolder}>
//         <h3>{node.name}</h3>
//         <span onClick={addFolder}>+</span>
//         {openInput&&<input type="text"/>}
//         {expanded&&node.children?.map((child,index)=><TreeNode node={child}/>)}
//       </div>
//   }
//   else{
//       return <div><h6>{node.name}</h6>
//      </div>
//   }
// }

// const FileExplorer=()=>{
//   const [folder,setFolder]=useState(folderData)

//    return <>

//    <div>
// <TreeNode node={folder} addFolder={addFolder}/>
//    </div>
//    </>
// }

// export default FileExplorer

// import React, { useState, useEffect } from "react";
// import nodeS from "../fileexplorerData.json";

// const TreeNode = ({ node, addNode,nodeStructure ,setNodeStructure}) => {
//   const [expanded, setExapnaded] = useState(false);
//   const [addNodeActive, setAddNodeActive] = useState(false);
//   const [newFolder, setNewFolder] = useState({ name: "Hell", type: "folder" });

//   const handleExpandFolder = (e) => {
//     e.stopPropagation();
//     setExapnaded((prev) => !prev);
//   };
//   const handleAdd = (e) => {
//     e.stopPropagation();
//     setAddNodeActive((prev) => !prev);
//   };

//   const handleAddFolderOrfile=(id)=>{
//  const updateNode=  addNode(nodeStructure,newFolder,id)
//  setNodeStructure(updateNode)
//   }
// const handleFileNameANdType=(event)=>{
//   if(event.target.name=="name"){
//     setNewFolder({...newFolder,name:event.target.value})
//   }
//   else{
//     setNewFolder({...newFolder,type:event.target.value,...(event.target.value=="folder"?{children:[]}:{})})

//   }
// }

//   useEffect(() => {
//     console.log("Hello",newFolder)
//    // setNodeStructure( addNode(nodeS, newFolder, "1"))
//   }, []);

//   if (node.type == "folder") {
//     return (
//       <div >
//         <span onClick={handleExpandFolder}>{node.name}</span>
//         <>+E</>
//         <div onClick={handleAdd}>Add</div>
//         {addNodeActive ? (
//           <>
//             <input name="name" type="text" placeholder="Name" onChange={handleFileNameANdType}/>
//             <input name="type" type="text" placeholder="type"  onChange={handleFileNameANdType}/>
//             <button onClick={()=>handleAddFolderOrfile(node.id)}>Add</button>
//           </>
//         ) : null}
//         {expanded &&
//           node.children.map((child, index) => <TreeNode node={child} addNode={addNode} nodeStructure={nodeStructure} setNodeStructure={setNodeStructure}/>)}
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <span>{node.name}</span>
//       </div>
//     );
//   }
// };

// export default function FileExplorer() {
//   console.log("Fi", nodeS);
//   const [nodeStructure, setNodeStructure] = useState(nodeS);
//   const addNode = (node, newNode, parentId) => {
//     console.log("Add Node",newNode)
//     // console.log("vfjhsfh",node,newNode,parentId)
//     //     return node.map((nod,index)=>{
//     //       if(nod.id==parentId&&nod.type=="folder"){
//     //         return {
//     //           ...node,children:[...(node.children||[]),{...newNode,id:node.children.length+parentId}]
//     //         }
//     //       }
//     //       else{
//     //         return {...node,children:addNode(no.children,parentId,newNode)}

//     //       }
//     //     })
//     if (node.id == parentId && node.type == "folder") {
//       return {
//         ...node,
//         children: [
//           ...(node.children || []),
//           { ...newNode, id: node.children.length + parentId },
//         ],
//       };
//     }
//     else{
//          return {...node,
//           children:node.children?.map((child,index)=>addNode(child,newNode,parentId))
//          }
//     }
//   };
//   return (
//     <>
//       <div>
//         <TreeNode node={nodeStructure} addNode={addNode} nodeStructure={nodeStructure} setNodeStructure={setNodeStructure}/>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import folder from "../fileexplorerData.json";
const TreeNode = ({ node ,nodeStructure,addNode,setNodeStructure}) => {
  const [expanded, setExpanded] = useState(false);
  const [activeAdd, setAddActive] = useState(false);
  const [newNode,setNewNode]=useState({type:"folder"})
  const handleExpand = (e) => {
    e.stopPropagation();
    setExpanded((prev) => !prev);
  };

  const handleAdd = (e,id) => {
    
    const updateNode = addNode(nodeStructure, newNode, id);
    setNodeStructure(updateNode);
  };

const handleOnchange=(e)=>{
if(e.target.name=="name"){
setNewNode({...newNode,name:e.target.value})
}
else{
  setNewNode({...newNode,type:e.target.value})
}
}

  const handleAddNode = (e) => {
    e.stopPropagation();
    setAddActive((prev) => !prev);
  };
  if (node.type === "folder") {
    return (
      <>
        {" "}
        <div style={{ display: "flex" }}>
          {" "}
          <div onClick={handleExpand}>{node.name}</div>
          <div onClick={handleAddNode}>+</div>
        </div>
        {expanded &&
          node.children?.map((child, index) => {
            return <TreeNode node={child}  nodeStructure={nodeStructure} setNodeStructure={setNodeStructure} addNode={addNode}/>;
          })}
{     activeAdd&&   <div>
          <input onChange={handleOnchange} name="name" type="text" placeholder="Enter Name" />
          <input onChange={handleOnchange} name="type" type="text" placeholder="Enter Type" />
          <button onClick={(e)=>handleAdd(e,node.id)}>Add</button>
        </div>}
      </>
    );
  } else {
    return (
      <>
        <div>{node.name}</div>
      </>
    );
  }
};

const FileExplorer = () => {

  
  
  const [nodeStructure, setNodeStructure] = useState(folder);
  function addNode(node,newNode,parentId){
    console.log("gsdjhd",node)
    if(node.id==parentId&&node.type=="folder"){
 return{...node,children:[...(node.children||[]),{...newNode,id:node.children?.length+1}]}
    }
    else{
      return{...node,
        children: node?.children?.map((child)=>{
       return addNode(child,newNode,parentId)
      })}
    }
    }
    function deleteNode(parentId){
      return {}
      //return {...node,children:node.children.filter((child)=>{child.id!==parentId})}}
    }
  console.log("Node", nodeStructure);
  return (
    <div>
      <TreeNode node={nodeStructure} nodeStructure={nodeStructure} setNodeStructure={setNodeStructure} addNode={addNode}/>
    </div>
  );
};

export default FileExplorer;
