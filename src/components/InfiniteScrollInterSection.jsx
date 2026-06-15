import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

const InfiniteScrollWithIntersection = () => {
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

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const nextLoad = useRef();

  const fetImages = async () => {
    setLoading(true);
    const data = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
    );

    const res = await data.json();

    setImages((prev) => [...prev, ...res]);
    setLoading(false);
  };
  useEffect(() => {
    fetImages();
  }, [page]);

  const entriesCallback = useCallback((entries, observer) => {
    console.log("en", entries);
    if (entries[0].isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  //Utility function
  const throttleCallback = (callback, delay) => {
    let throttle = false;
    return (...arg) => {
      if (throttle) return;
      console.log("Lets see arg", arg);
      callback(...arg);
      throttle = true;
      setTimeout(() => (throttle = false), delay);
    };
  };

  const intersectCall = useMemo(
    () => throttleCallback(entriesCallback, 1000),
    [entriesCallback]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(intersectCall, {
      threshold: 0.1,
      rootMargin: "150px",
    });

    if (nextLoad.current) observer.observe(nextLoad.current);
    return () => observer.disconnect();
  }, []);


  console.log("Pages data", images);
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {images?.map((image, index) => (
          <img
            style={{ height: "30vh", width: "30vw" }}
            src={image.download_url}
          />
        ))}
      </div>
      <div id="nextLoad" ref={nextLoad}>
        {" "}
        Loader...
      </div>
    </div>
  );
};

export default InfiniteScrollWithIntersection;
