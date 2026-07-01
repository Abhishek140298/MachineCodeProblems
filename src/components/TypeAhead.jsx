import React, { useCallback, useEffect, useState ,useMemo} from "react";

export const suggestions = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
    },
    {
      id: 2,
      name: "React Native",
      category: "Mobile",
    },
    {
      id: 3,
      name: "React Query",
      category: "Library",
    },
    {
      id: 4,
      name: "Redux",
      category: "State Management",
    },
    {
      id: 5,
      name: "Redux Toolkit",
      category: "State Management",
    },
    {
      id: 6,
      name: "Next.js",
      category: "Framework",
    },
    {
      id: 7,
      name: "Angular",
      category: "Framework",
    },
    {
      id: 8,
      name: "Vue.js",
      category: "Framework",
    },
    {
      id: 9,
      name: "TypeScript",
      category: "Language",
    },
    {
      id: 10,
      name: "Node.js",
      category: "Backend",
    },
  ];

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
//  const [query,setQuery]=useState("")
//  const  [suggestionList,setSuggestionList]=useState([])
//  const [activeSuggstion,setActiveSuggestion]=useState(0)
//  const [loading,setLoading]=useState(false)
//  const cacheRef=new Map()


//  const fetchSuggestions=(query)=>{
//     setSuggestionList(["Abhi","Ra,"])
// return ["Abhi","Ra,"]
//  }
 

//  const debounced=(callback,delay)=>{
//     let timer
//     return (query="Abh")=>{
//         console.log("Fdjhbs",query)
//         if(timer)clearTimeout(timer)
//            timer= setTimeout(()=>{

//         callback(query)
      
//         },delay)

//     }
//  }

//  const handleChange=(e)=>{
//     setQuery(e.target.value)
//     setLoading(true)

//  }
// const debouncedSearch=debounced(fetchSuggestions,1000)

//  useEffect(()=>{
//     if(query.length>0||true){
//     debouncedSearch(query)
       
//     }

//  },[query])


// console.log("Suggestio",suggestionList)
//  return<><div>Hello</div></>
const [query,setserachQuery]=useState('')
const [isSuggestion,setIssuggestion]=useState(false)
const [suggestionList,setSuggestionList]=useState([])
const [activeSuggestion,setActiveSuggestion]=useState(1)

const searchQuery=useCallback((query)=>{
  console.log("query",query)
  return suggestions.filter((sug,index)=>sug.name.includes(query)||sug.category.includes(query))
},[])

const handleSearch=(e)=>{
      setserachQuery(e.target.value)
     
      
}


const debounce=(callback,delay)=>{
  let timer
  return (query)=>{
       if(timer)  clearTimeout(timer)
        timer=setTimeout(()=>callback(query),delay)
  }
}

const debouncedSearch=useCallback(debounce(async(query)=>{const searches=await searchQuery(query)
  if(searches&& searches?.length>0){
    console.log("Search",searches)
    setIssuggestion(true)
    setSuggestionList(searches)
  }
  else{
    setIssuggestion(false)
    setSuggestionList([])
  }
},400),[])

useEffect(()=>{
  if(query?.length>0){
    const searches=debouncedSearch(query)
  
    
  }
  else{
    setSuggestionList([])
  }
},[query])


const handleKey=(event)=>{
  console.log("eve",event.key)
  switch(event.key){
    case "ArrowUp":
      setActiveSuggestion(prev=>prev>0?prev-1:suggestionList?.length-1)

     
      break
    case "ArrowDown":
      setActiveSuggestion(prev=>prev<suggestionList?.length?prev+1:1)
      break
      case "Enter":
        setserachQuery(suggestionList[activeSuggestion-1].name)
        break
     default:
      break

  }
}

return (
  <div>
    <input type="text" placeholder="Search" onChange={handleSearch} onKeyDown={handleKey} value={query}/>
   <ul> {isSuggestion&&suggestionList.map((list,index)=>{
      return <li style={{background:`${activeSuggestion==index+1 ? "grey":"white"}`}}>{list.name}</li>
    })}</ul>
  </div>
)
}

export default TypeAhead