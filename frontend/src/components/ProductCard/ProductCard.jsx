import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ perfume }) => {
  const navigate = useNavigate();
  const BASE = process.env.REACT_APP_API_URL;

  return (
    <div className="card" onClick={() => navigate(`/product/${perfume.id}`)}>
      <div className="img-wrap">
        <img
          src={`${BASE}${perfume.images[0]}`}
          alt={perfume.name}
          className="product-img"
        />
      </div>

      <div className="card-body">
        <h3>{perfume.name}</h3>
        <p className="short">
          {perfume.description?.slice(0, 70)}...
        </p>
        <div className="card-bottom">
          <span className="price">₹{perfume.price}</span>
          <button className="view-btn">View</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
