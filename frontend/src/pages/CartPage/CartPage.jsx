import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./CartPage.css";

export default function CartPage() {
  const { cart, removeFromCart, updateQty } = useContext(StoreContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item._id + item.size} className="cart-item">
            <img src={item.image} alt={item.name} />

            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Size: {item.size}</p>
              <h4>₹{item.price}</h4>

              <div className="qty-controls">
                <button
                  onClick={() =>
                    updateQty(item._id, item.size, item.qty - 1)
                  }
                  disabled={item.qty <= 1}
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() =>
                    updateQty(item._id, item.size, item.qty + 1)
                  }
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item._id, item.size)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <h2 className="total">Total: ₹{total}</h2>
    </div>
  );
}
