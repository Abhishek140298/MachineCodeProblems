import React, { useEffect, useState,useRef } from "react";

const LazyLoadImage = ({ src, alt, fallback }) => {
  const imageRef = useRef();
  const [isVisible, setVisible] = useState(false);
  //we will use IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "150px" }
    );
    if(imageRef.current){observer.observe(imageRef.current)}
    return ()=>observer.disconnect()
  }, []);
 

console.log("Image")
  return (
    <div ref={imageRef}>
      Lazy Load image
      {isVisible && <img src={src} />}
    </div>
  );
};


export default LazyLoadImage

//For multiple methods
{/*import { useEffect, useRef } from "react";

const ImageList = ({ images }) => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observerRef.current.unobserve(img);
          }
        });
      },
      {
        rootMargin: "150px",
        threshold: 0.1
      }
    );

    return () => observerRef.current.disconnect();
  }, []);

  return (
    <div>
      {images.map((src, i) => (
        <img
          key={i}
          data-src={src}
          alt=""
          ref={(el) => el && observerRef.current.observe(el)}
        />
      ))}
    </div>
  );
};

export default ImageList;
 */}

 //Native LOading 
 {/*<img
  src="https://example.com/image.jpg"
  alt="demo"
  loading="lazy"
/> */}

//background observer
{/*const Box = ({ image }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="box"
      style={{
        backgroundImage: loaded ? `url(${image})` : "none",
      }}
      ref={(el) => {
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setLoaded(true);
            observer.disconnect();
          }
        });
        observer.observe(el);
      }}
    />
  );
};
 */}