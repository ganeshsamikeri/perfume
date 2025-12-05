import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner" style={{ backgroundImage: `url('/images/banner.jpg')` }}>
      <div className="banner-content">
        <h1>Discover Your Signature Scent</h1>
        <p>Explore the latest collections and exclusive offers just for you.</p>
        <a className="cta" href="#featured">Explore Collections →</a>
      </div>
    </section>
  );
};

export default Banner;
