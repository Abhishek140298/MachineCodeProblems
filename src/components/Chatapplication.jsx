import React, { useEffect, useState } from "react";
import chatData from '../data/chat.json'


export default function ChatApplication() {
    const selectedUSer="u1"
    const [user,setUser]=useState()
    const [userChatlist,setUserChatList]=useState([])
    const [seletedUserChat,setSlectedUSerChat]=useState([])
    const [selectedUser,setSelectedUSerChat]=useState()
    const getUSerDetails=async(userId)=>{
    const user =await chatData.users[userId]

    setUser(user)
    }


 async function getConversations(currentUserId)   {
    const conversations=await Object.values(chatData.conversations)?.filter(conv => conv.members.includes(currentUserId))
    console.log("Conver",conversations)
    setUserChatList(conversations)
 }
   
useEffect(()=>{
    getUSerDetails(selectedUSer)
    getConversations(selectedUSer)
},[])

  return (
    <div>
      <h1>Talker</h1>
      <div style={{ display: "flex", width: "100vw", height: "90vh" }}>
        <div style={{width:'50%'}}>
          <h3>Messages for {user?.userName}</h3>
          {userChatlist?.map((conversa,index)=><span>{conversa?.id}</span>)}
        </div>
        <div style={{width:'50%'}}>
          <div>User A</div>
          <div>Chats</div>
        </div>
      </div>
    </div>
  );
}
