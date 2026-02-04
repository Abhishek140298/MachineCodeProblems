import React, { useEffect, useState } from "react";

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
    if(imageRef.current){observer.observe(imageRef)}
    return ()=>observer.disconnect()
  }, []);

  return (
    <div ref={imageRef}>
      Lazy Load image
      {isVisible && <img src={src} />}
    </div>
  );
};
