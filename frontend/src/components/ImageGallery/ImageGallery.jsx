import React, { useState } from "react";
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="gallery-container">
      {/* Main Image */}
      <div className="main-image-wrapper">
        <img src={mainImage} alt="product" className="main-image" />
      </div>

      {/* Thumbnail Images */}
      <div className="thumbnail-row">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="thumbnail"
            className={`thumbnail ${mainImage === img ? "active-thumb" : ""}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
