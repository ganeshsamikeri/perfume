import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";
import "./FeaturedProducts.css";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="featured-container">
      <h1 className="heading">Featured Perfumes</h1>

      <div className="product-grid">
        {products.map((p) => (
          <Link
            to={`/product/${p._id}`}
            key={p._id}
            className="product-card-link"
          >
            <div className="product-card">
              <img src={p.image} alt={p.name} className="product-img" />
              <h3>{p.name}</h3>
              <p className="desc">{p.description}</p>
              <p className="price">₹{p.price}</p>
              <span className="view-btn">View Details</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
