// import React, { useEffect, useState, useRef } from "react";

// const CONTAINER_HEIGHT = 800;
// const ITEM_HEIGHT = 200;
// const OVERSCAN = 2;
// const VirtualizationInInfiniteScroll = () => {
//   const [laoding, setLoading] = useState(false);
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(10);
//   const [imageVisible, setImageVisible] = useState([]);
//   const intersectRef = useRef();
//   const container = useRef();
//   const [scrollTop, setScrollTop] = useState(0);
//   //Conterner height=

//   const fetImages = async () => {
//     setLoading(true);
//     const data = await fetch(
//       `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
//     );

//     const res = await data.json();

//     setImages((prev) => [...prev, ...res]);
//     setLoading(false);
//   };

//   const handlePageIncrement = (entries, observer) => {
//     if (entries[0].isIntersecting) {
//       setPage((prev) => prev + 1);
//     }
//   };

//   const throttleScroll = (callback, delay) => {
//     let timer = false;
//     return (...arg) => {
//       if (timer) return;
//       setTimeout(() => {
//         callback(...arg);
//         timer = false;
//       }, delay);
//       timer = true;
//     };
//   };

//   const intersecCallReady = throttleScroll(handlePageIncrement, 1000);

//   useEffect(() => {
//     const observer = new IntersectionObserver(intersecCallReady, {
//       root: container.current,
//       rootMarginL: "30px",
//       threshold: 0.1,
//     });
//     if (intersectRef.current) observer.observe(intersectRef.current);

//     return () => observer.disconnect();
//   }, []);

//   const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT));
//   const visibleContent =
//     Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT) + OVERSCAN * 2;
//   const endIndex = Math.min(images.length, startIndex + visibleContent);

//   const visible = images.slice(startIndex, endIndex);
//   console.log("Visib",visible)
//   useEffect(() => {
//     fetImages();
//   }, [page]);

//   return (
//     <>
//     <div
//       ref={container}
//       style={{ height: CONTAINER_HEIGHT, overflowY: "auto" ,border: "1px solid black",width:'100vw'}}
//       onScroll={(e) => {
//         setScrollTop(e.target.scrollTop);

//       }}
//     >
//       <div
//         style={{ position: "relative", height: images.length * ITEM_HEIGHT,background:'red' }}
//       >
//         {console.log("Visi",visible,startIndex)}
//         {visible?.map((img, index) => {
//           const actualIndex = index +startIndex;
//           return (
//             <div
//               style={{
//                position:'absolute',
//                 top: ITEM_HEIGHT * actualIndex,
//                 left: 0,
//                 right: 0,
//                 height: ITEM_HEIGHT,
//               }}
//             >
//               <img src={img.download_url} height="200px" width="400px" />
//             </div>
//           );
//         })}
//         </div>
//         <div ref={intersectRef} >Loaadinng</div>

//         </div>

//     </>
//   );
// };

// export default VirtualizationInInfiniteScroll;

import React, { useEffect, useRef, useState } from "react";
const Image = ({ image }) => {
  console.log("sbkjdfs", image);
  return (
    <>
      <img
        style={{ height: "200px", width: "300px" }}
        src={image.download_url}
      />
    </>
  );
};

const VirtualizationInInfiniteScroll = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const intersectRef = useRef();
  const containerRef = useRef();
  const [scrollTOp, setScrollTop] = useState(0);

  const fetchImages = async () => {
    try {
      const data = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );
      const res = await data.json();
      setImages([...images, ...res]);
    } catch (error) {
      console.log("Error123", error);
    }
  };
  console.log("Scrolltop", scrollTOp);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observe) => {
        console.log("HFvjshvjh",entries)
        entries[0].isIntersecting? setPage((prev) => prev + 1):null
      },
      {
        root: containerRef.current,
        rootMargin: "30px",
        threshold: 0.1,
      }
    );

    if (intersectRef.current) observer.observe(intersectRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const startIndex = Math.max(0, scrollTOp / 200);
  const visibleContent = Math.ceil(800 / 200);
  const endIndex = Math.min(images.length, startIndex + visibleContent)+2;
  const visible = images.slice(startIndex, endIndex);
  useEffect(() => {
    const img = fetchImages();
  }, [page]);

  console.log("Jai", images,scrollTOp,visible);

  return (
    <div
      style={{
       
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        height: 800,
      }}
      ref={containerRef}
      onScroll={(e) => {
        setScrollTop(e.target.scrollTop);
      }}
    >
      <div  style={{ position: "relative", height: images.length * 200,background:'red',width:'400px'}}>
      {visible?.map((image, index) => {
        const actualIndex = startIndex + index;
        return (
          <div
            style={{
              position: "absolute",
              top: actualIndex * 200,
              width: "100%",
              height:200
            }}
          >
            <Image image={image} />
          </div>
        );
      })}
     <div style={{position:'absolute',top:endIndex*200+1}} ref={intersectRef}>Loadind...</div>
</div>

    </div>
  );
};

export default VirtualizationInInfiniteScroll;
