//Classic suscribing component to external source by useEffect and useState

import { useState } from "react"

const LiveCounter=()=>{
    const [timer,setTimer]=useState(new Date())
    const interval=useRef()
    useEffect(()=>{
       
  interval.current=setInterval(()=>{
    setTimer(new Date())




  },1000)

  return ()=>clearInterval(interval.current)
    },[])


    return (
        <div>{timer.toLocaleTimeString()}</div>
    )
}


const ChatRoom=(roomId)=>{

 const [message,setMessage]=useState([])

 useEffect(()=>{
     const socket=new WebSocket(`https://mywebsocket.com/?${roomid}`)
const handleMessage=(event)=>{setMessage(prev=>[...prev,JSON.parse(event.data)])}
     socket.addEventListener("message",handleMessage)

     return ()=>{
        socket.removeEventListener("message",handleMessage)
        socket.close()
     }
     
 },[roomId])


 return (<div>{message.map((m,i)=><div>{m}</div>)}</div>)

}