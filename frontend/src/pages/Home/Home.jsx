import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import api from "../../api/axios";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <Banner />

      <div className="home-container">
        <h1>Perfume Shop</h1>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product._id}>

              {/* ⭐ FIXED IMAGE CODE YOU REQUESTED */}
              <img
                src={`http://localhost:5000${product.images?.[0]}`}
                alt={product.name}
                className="product-card-img"
              />

              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h3>₹{product.price}</h3>

              <Link to={`/product/${product._id}`} className="details-btn">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
