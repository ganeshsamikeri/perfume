import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ perfume }) => {
  const navigate = useNavigate();

  // Backend URL (must be set in Netlify env OR .env)
  const BASE_URL =
    process.env.REACT_APP_API_URL ||
    "https://YOUR-BACKEND.onrender.com";

  const imageUrl =
    perfume?.images?.length > 0
      ? `${BASE_URL}${perfume.images[0]}`
      : "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div
      className="card"
      onClick={() => navigate(`/product/${perfume._id}`)}
    >
      <div className="img-wrap">
        <img
          src={imageUrl}
          alt={perfume.name}
          className="product-img"
          loading="lazy"
        />
      </div>

      <div className="card-body">
        <h3>{perfume.name}</h3>

        <p className="short">
          {perfume.description
            ? perfume.description.slice(0, 70) + "..."
            : "No description"}
        </p>

        <div className="card-bottom">
          <span className="price">₹{perfume.price}</span>
          <button
            className="view-btn"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${perfume._id}`);
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
