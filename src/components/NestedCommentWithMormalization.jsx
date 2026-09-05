import React, { useEffect, useRef, useState } from 'react'
// Array of comments — no nesting in the data itself
const comments = [
  { id: 1, parentId: "root", text: "Great post!", authorId: "u1", createdAt: 1000 },
  { id: 2, parentId: 1,    text: "Agreed!",      authorId: "u2", createdAt: 1010 },
  { id: 3, parentId: 1,    text: "Same here",    authorId: "u3", createdAt: 1020 },
  { id: 4, parentId: 2,    text: "Why though?",  authorId: "u4", createdAt: 1030 },
  { id: 5, parentId: "root", text: "Disagree",     authorId: "u5", createdAt: 1040 },
];


/*
This is the non nesteed array ,make the normalized data from the this comments
? commnetById :{
1:{dtails},
2:{gsfgd},}
? childrenOf:{
?
"root":[12,443],
1:[3,4]
?} 

commentByid will be sused to fetch the data form the comment on the bases of the id
childrenOf will be use to build the 
*/
// setChildrenOf(prev=>prev[comment.parentId]?{...prev,[comment.parentId]:[...prev[comment.parentId],comment.id]}:{...prev,[comment.parentId]:[comment.id]})

const TreeNode=({comm,commentById,childrenOf})=>{
    console.log("jbsnm,",comm)
return (<div>{
    Array.from(comm||[])?.map((com)=>{ //![...comm]
       
     return (<div style={{marginLeft:`20px`}}>
        <div>{
            commentById[com].text
            }
            
            </div>
            {childrenOf[com]&&<TreeNode comm={childrenOf[com]} commentById={commentById} childrenOf={childrenOf}/>}
            </div>)
    })
    }</div>)


}


const NestedCommentWithN=()=>{
const [commentById,setCommentById]=useState({})
const [childrenOf,setChildrenOf]=useState({})
const root=useRef()

const addNormalizedData=()=>{
    comments.forEach((comment,index)=>{
        setCommentById((prev)=>({...prev,[comment.id]:comment}))
        
        setChildrenOf(prev=>{
            let children=prev[comment.parentId]||new Set()
            let updateChildren=new Set(children)
            updateChildren.add(comment.id);

            return {
                ...prev,
                [comment.parentId]:updateChildren
            } 
            
           })
    })
    
}
console.log("Hari om",commentById,childrenOf)
useEffect(()=>{
addNormalizedData()
    
},[])


return (<><TreeNode comm={childrenOf['root']} commentById={commentById} childrenOf={childrenOf}/></>)
}


export default NestedCommentWithN