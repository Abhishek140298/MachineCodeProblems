import React, { useCallback, useEffect, useRef } from 'react'



const useDebounce=(callback,delay)=>{
    const callbackRef=useRef(callback)
    //it saves us from the stale closure ,because our debounce function will not rerender on every render
    const timerRef=useRef(null)
    useEffect(()=>{callbackRef.current=callback},[callback])

 
    //tis is wrong userRef will assign new timer to every render 
//     const debounceRef=useRef()
//    debounceRef.current=debounce(callbackRef,delay)

//** both options are feasible */

//Tis correct
const myDebounce=useCallback((...arg)=>{
    if(timerRef.current)clearTimeout(timerRef.current)
      timerRef.current=  setTimeout(()=>callback(...arg),delay)
},[delay])

//This check
//need to assign the latest delay also

const debounceRef=useRef((...arg)=>{
    if(timerRef.current)clearTimeout(timerRef.current)
      timerRef.current=  setTimeout(()=>callback(...arg))})


   return debounceRef.current
}