import React, { useState, useEffect } from "react";
import "./ImageGallery.css";

const ImageGallery = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(null);

  // Set first image safely when API data arrives
  useEffect(() => {
    if (images && images.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]);

  if (!mainImage) return <p>Loading images...</p>;

  return (
    <div className="gallery-container">
      
      {/* MAIN IMAGE */}
      <div className="main-image-wrapper">
        <img
          src={mainImage}
          alt="product"
          className="main-image"
          loading="lazy"
          onError={(e) => (e.target.src = "/fallback.jpg")}
        />
      </div>

      {/* THUMBNAILS */}
      <div className="thumbnail-row">
        {images.map((img) => (
          <img
            key={img}             // ✅ FIX: stable key (no flicker)
            src={img}
            alt="thumbnail"
            loading="lazy"
            className={`thumbnail ${mainImage === img ? "active-thumb" : ""}`}
            onClick={() => setMainImage(img)}
            onError={(e) => (e.target.src = "/fallback-thumb.jpg")}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
