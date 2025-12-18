import React, { useState, useEffect } from "react";
import "./ImageGallery.css";

// Backend base URL (without /api)
const BACKEND_URL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL.replace("/api", "")
  : "";

const ImageGallery = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState("");

  // Set first image when data arrives
  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]);

  if (!mainImage) return <p>Loading images...</p>;

  // Helper to build correct image URL
  const getImageUrl = (img) => `${BACKEND_URL}${img}`;

  return (
    <div className="gallery-container">
      {/* MAIN IMAGE */}
      <div className="main-image-wrapper">
        <img
          src={getImageUrl(mainImage)}
          alt="product"
          className="main-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/fallback.jpg";
          }}
        />
      </div>

      {/* THUMBNAILS */}
      <div className="thumbnail-row">
        {images.map((img) => (
          <img
            key={img}
            src={getImageUrl(img)}
            alt="thumbnail"
            loading="lazy"
            className={`thumbnail ${
              mainImage === img ? "active-thumb" : ""
            }`}
            onClick={() => setMainImage(img)}
            onError={(e) => {
              e.target.src = "/fallback-thumb.jpg";
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
