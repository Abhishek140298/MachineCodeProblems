import React, { useEffect, useRef, useState } from "react";

const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const parent = useRef(null);

  const fetchImage = async () => {
    const img = await fetch("https://picsum.photos/v2/list");
    const real = await img.json();
    setImages(real);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const visible = 3;

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <button onClick={prev}>Prev</button>

      <div
        ref={parent}
        style={{
          display: "flex",
          overflow: "hidden",
          width: "100vw",
        }}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 0.4s ease",
            transform: `translateX(-${index * (100 / visible)}%)`,
            width: `${images.length * (100 / visible)}%`,
          }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.download_url}
              alt=""
              style={{
                width: `${100 / visible}%`,
                height: "300px",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      </div>

      <button onClick={next}>Next</button>
    </div>
  );
};

export default ImageCarousel;
