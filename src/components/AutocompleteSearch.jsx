import React ,{useState}from 'react'

const autoCompleteText=["Abhishek","Divyansh","Manish","Abhinav"]
const cache={}
const Autocomplete=()=>{
    const [inputValue,setInputValue]=useState()
    const [suggestion,setSuggestion]=useState([])
   
const checkToAutocompleteText=(value)=>{

    //  let i=0;
    //  let j=0
    //  let list=[]
    //  while(i<autoCompleteText.length)
    //  {
    //     console.log("Aur",autoCompleteText[i][j])
    //     if(autoCompleteText[i][j]!==value[j]){
    //         i++
    //         j=0
    //     }
    //     else{
    //         if(j<value.length){
    //             j++
    //            list?.includes(autoCompleteText[i])? null:list.push(autoCompleteText[i])
    //         }
    //         else{
    //             console.log("Aur",j,i)

    //             j=0
    //             i++
    //         }
              
    //     }
    //  }
    //  return list
    let list = [];

 if(cache[value]){
    return cache[value]
 }
 for (let i = 0; i < autoCompleteText.length; i++) {
    let word = autoCompleteText[i];
    let isMatch = true;

    // If search value is longer than word → skip
    if (value.length > word.length) continue;

    for (let j = 0; j < value.length; j++) {
        if (word[j] !== value[j]) {
            isMatch = false;
            break;
        }
    }

    if (isMatch) {
        list.push(word);
        cache[value]=list
        
    }
}

    return list;
     
}

//
console.log("Cache",cache)

const debounceSearch=(delay)=>{
    // let timer
    // return ()=>{
    //     let interval=setTimeout(()=>{},delay)
    //     timer=true
    //     if(timer)clearTimeout(interval)
    // }

    let timer
    return (e)=>{
        clearTimeout(timer)
        timer=setTimeout(()=>{

            console.log("Timeout")
            const value=checkToAutocompleteText(e.target.value)
            console.log("Value",value)
            if(value.length>0)setSuggestion(prev=>value)
        },delay)
    }
}


const handleChange=debounceSearch(1000)

    return (<div>
        Hello there i am adding your name to auto search
        <div>
            <input value={inputValue} id="search-input" type="text" placeholder='Search your name' onChange={handleChange}/>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
            {suggestion.length>0&&suggestion?.map((sug,index)=><span>{sug}</span>)}
        </div>
    </div>)
}


export default Autocomplete

//Enhnacement >check for any subscript like ishe then return Abhishek
//Add the debounce also
//Add tab,enter and click on the Suggestion list