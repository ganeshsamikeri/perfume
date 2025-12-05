import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";   // ✅ Added

const Navbar = () => {
  const { cart } = useContext(StoreContext);                 // ✅ Added

  return (
    <header className="nav-wrap">
      <nav className="navbar">
        
        <div className="logo">
          <Link to="/">Perfume Shop</Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#featured">Products</a></li>

          {/* ⭐ CART LINK WITH COUNT ⭐ */}
          <li>
            <Link to="/cart" className="cart-link">
              Cart ({cart.length})
            </Link>
          </li>
        </ul>
        
      </nav>
    </header>
  );
};

export default Navbar;
