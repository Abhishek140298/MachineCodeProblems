// import React,{createContext,useContext,useState} from 'react'

// const ToastContext=createContext(null)


// const ToastProvider=({children})=>{
//   const [toasts,setToasts]=useState([])

//   function showToast(message,type){
//        const toast={
//         id: crypto.randomUUID(),
//         message,
//         type,duration:3000
//        }
//        setToasts((prev)=>[...prev,toast])

//   }


//   const removeToast=(toastId)=>{


//   }
//     const value={
//   success:(message)=>showToast(message,"success"),
//   warning:(message)=>showToast(message,"warning"),
//   error:(message)=>showToast(message,"error"),
//   removeToast,
//     }
//    return (
//     <ToastContext.Provider value={value}>
//         {children}
//      <ToastContainer toasts={toasts} removeToast={removeToast}/>
//     </ToastContext.Provider>
//    )
// }


// const useToast=()=>{
//     return useContext(ToastContext)
// }


// const ToastContainer=({toasts,removeToast})=>{
//     return (<div style={{position:'fixed',top:0,right:20}}>
//        { toasts?.map(toast=><span>{toast.message}</span>)}
//     </div>)
// }


// export default ToastProvider
// export {useToast}



import React, { Children, createContext } from 'react'

const ToastContext=createContext(null)

const ToastProvider=({children})=>{
 const [toasts,setToasts]=useState([])
const showToast=()=>{

}

const removeToast=()=>{

}

const value={
  success:(message)=>showToast("success",message),
  show:(type,message,position,color,max)=>showToast(type,message,position,color,max),
}

return <ToastContext.Provider value={value}>
  {children}
  <ToasContainer removeToast={removeToast} toasts={toasts}/>
</ToastContext.Provider>



}


const ToasContainer=(removeToast,toasts)=>{
  return (<div>Hello</div>)
}


const Toast=()=>{
  <div>Toast</div>
}


export default ToastProvider