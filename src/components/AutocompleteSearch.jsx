 import React ,{useEffect, useState}from 'react'

// const autoCompleteText=["Abhishek","Divyansh","Manish","Abhinav","Raaj","Myname"]
// const cache={}
// const Autocomplete=()=>{
//     const [inputValue,setInputValue]=useState()
//     const [suggestion,setSuggestion]=useState([])
   
// const checkToAutocompleteText=(value)=>{

//     //  let i=0;
//     //  let j=0
//     //  let list=[]
//     //  while(i<autoCompleteText.length)
//     //  {
//     //     console.log("Aur",autoCompleteText[i][j])
//     //     if(autoCompleteText[i][j]!==value[j]){
//     //         i++
//     //         j=0
//     //     }
//     //     else{
//     //         if(j<value.length){
//     //             j++
//     //            list?.includes(autoCompleteText[i])? null:list.push(autoCompleteText[i])
//     //         }
//     //         else{
//     //             console.log("Aur",j,i)

//     //             j=0
//     //             i++
//     //         }
              
//     //     }
//     //  }
//     //  return list
//     let list = [];

//  if(cache[value]){
//     return cache[value]
//  }
//  for (let i = 0; i < autoCompleteText.length; i++) {
//     let word = autoCompleteText[i];
//     let isMatch = true;

//     // If search value is longer than word → skip
//     if (value.length > word.length) continue;

//     for (let j = 0; j < value.length; j++) {
//         if (word[j] !== value[j]) {
//             isMatch = false;
//             break;
//         }
//     }

//     if (isMatch) {
//         list.push(word);
//         cache[value]=list
        
//     }
// }

//     return list;
     
//}

//
// console.log("Cache",cache)

// const debounceSearch=(delay)=>{
//     // let timer
//     // return ()=>{
//     //     let interval=setTimeout(()=>{},delay)
//     //     timer=true
//     //     if(timer)clearTimeout(interval)
//     // }

//     let timer
//     return (e)=>{
//         clearTimeout(timer)
//         timer=setTimeout(()=>{

//             console.log("Timeout")
//             const value=checkToAutocompleteText(e.target.value)
//             console.log("Value",value)
//             if(value.length>0)setSuggestion(prev=>value)
//         },delay)
//     }
// }


// const handleChange=debounceSearch(1000)

//     return (<div>
//         Hello there i am adding your name to auto search
//         <div>
//             <input value={inputValue} id="search-input" type="text" placeholder='Search your name' onChange={handleChange}/>
//         </div>
//         <div style={{display:'flex',flexDirection:'column'}}>
//             {suggestion.length>0&&suggestion?.map((sug,index)=><span>{sug}</span>)}
//         </div>
//     </div>)
// }


// export default Autocomplete

//Enhnacement >check for any subscript like ishe then return Abhishek
//Add the debounce also
//Add tab,enter and click on the Suggestion list



const mock_data=["Abhishek","Divyansh","Manish","Abhinav","Raaj","Myname"]
const map=new Map()
const makeSuggestion=(query='')=>{
    console.log("Query",query)
const suggestionList=[]
// mock_data.sort()
if(map.has(query))return map.get(query)
for(let data of mock_data){

    let q=0
    while(q<query.length){

        if(query[q].toLowerCase()==data[q].toLowerCase()){
            q++
            if(q==query?.length){
               
                suggestionList.push(data)
            }

        }

        else break
    }


}
map.set(query,suggestionList)
return suggestionList
}


//sort+binary search algorithm for fetching data ,and trie also
const Autocomplete=()=>{

const [loading,setLoading]=useState(false)
const [suggestionList,setSuggestionList]=useState(null)
const [selectedSuggestion,setSelctedSuggestion]=useState(0)

useEffect(()=>{
    
},[])

function debounce(callback,delay){
    let timer
    return (value)=>{
        if(timer)clearTimeout(timer)
       timer= setTimeout(()=>callback(value),delay)    
    }
}



const handleSearch=(value)=>{
    const sugRes=makeSuggestion(value)
    setSuggestionList(sugRes)  
}

const handleKeyDown=(e)=>{
    console.log("Keydown",e.code,suggestionList,selectedSuggestion)
    e.preventDefault()
       if(selectedSuggestion>=0&&selectedSuggestion<suggestionList?.length){
    switch(e.code){
        case "ArrowDown":
            setSelctedSuggestion(prev=>prev+1)
            break
        case "ArrowUp"    :
            setSelctedSuggestion(prev=>prev-1)
            break
        case "Enter":
            setSuggestionList([])    
        default :
               break
    }
   }
}

const debounceSearch=debounce(handleSearch,1000)

    return(<>
    <input type="Text" placeholder='Search' onChange={(e)=>debounceSearch(e.target.value)} onKeyDown={handleKeyDown}/>
    {loading?<div>Loading..</div>:null}
    {suggestionList&&<div>{suggestionList?.map((suggestions,index)=>{
       return <span style={{background:`${selectedSuggestion===index?'grey':'white'}`}}>{suggestions}</span>
    })}</div>}
    </>)
}


export default Autocomplete
