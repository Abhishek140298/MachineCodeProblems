import React, { useEffect, useState } from "react";

const InputSerach = (value, handleInput) => {
  return (
    <input
      value={value}
      onChange={() => handleInput()}
      type="text"
      placeholder="Search"
    />
  );
};



const SuggestionDropDown=()=>{

}


const TypeAhead=()=>{
 const [query,setQuery]=useState("")
 const  [suggestionList,setSuggestionList]=useState([])
 const [activeSuggstion,setActiveSuggestion]=useState(0)
 const [loading,setLoading]=useState(false)
 const cacheRef=new Map()


 const fetchSuggestions=(query)=>{
    setSuggestionList(["Abhi","Ra,"])
return ["Abhi","Ra,"]
 }
 

 const debounced=(callback,delay)=>{
    let timer
    return (query="Abh")=>{
        console.log("Fdjhbs",query)
        if(timer)clearTimeout(timer)
           timer= setTimeout(()=>{

        callback(query)
      
        },delay)

    }
 }

 const handleChange=(e)=>{
    setQuery(e.target.value)
    setLoading(true)

 }
const debouncedSearch=debounced(fetchSuggestions,1000)

 useEffect(()=>{
    if(query.length>0||true){
    debouncedSearch(query)
       
    }

 },[query])


console.log("Suggestio",suggestionList)
 return<><div>Hello</div></>

}

export default TypeAhead