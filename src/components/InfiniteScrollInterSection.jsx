import React from 'react'

const InfiniteScrollWithIntersection=()=>{

/*
?IntersectionObserver=>IntersectionObserver is a browser API that lets you to detect the element 
?when it enters and leaves the view port ,without using the heavy  scroll event
*Basic Syntax>   const observer=new IntersectionObserver(callback,options)
* observer.observe(tagElement)
  todo >Callback function>  (entries,observer)=>{
  todo      }

  ! entries>[]
  !entry contains=> isIntersecting >true/false if the element is in the view port
  !also contains target->element and interectionRatio->How much visible
  ?options ={root:null,rootMargin:"0px",thresold:0.5}
  root=>null ->browserviewport
  OR parent container
  rootMargin>like CSS margin
"100px" → triggers earlier
threshold

0 → any visibility
1 → fully visible
0.5 → 50% visible
*/

const fetchImage=async ()=>{
}


    return (<div>Hello</div>)
}

export default InfiniteScrollWithIntersection