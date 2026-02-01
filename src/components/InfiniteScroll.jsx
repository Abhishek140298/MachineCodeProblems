import React, { useEffect } from "react";

export default function InfiniteScroll() {
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [pageLimit, setPageLimit] = React.useState(10);
  const [data, setData] = React.useState([]);
  //Data Fetch
  const fetData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=${pageLimit}`
    );
    const res = await data.json();
    setData((prev) => [...prev, ...res]);
    setLoading(false);
  };
//Add throttling
const handleScroll=()=>{
    console.log("Loading",loading,page)
    if(loading)return
    if(window.innerHeight+window.scrollY>=document.body.scrollHeight-1){
        console.log("inner height")

        setPage(prev=>prev+1)
        setLoading(true)
    }
}

  React.useEffect(() => {
    console.log("Page issue")
    fetData();
  }, [page]);

React.useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return ()=> window.removeEventListener('scroll',handleScroll)
},[])

  return <div>
{/*Make UI */}
<h1>Picture Gallery</h1>
<div>
    {data?.map((value,index)=><div>
        
      <img
      src={value.download_url}
      alt={value.author}
      height={30}
      />
      <h6>{value?.author}</h6>
        </div>)}
</div>

  </div>;
}
