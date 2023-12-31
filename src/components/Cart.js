import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import image from "../images/jersey.jpeg";

export default function Cart() {
  const { cartItems, setCartOpen, cartItemsCount, deleteItemFromCart } =
    useCart();
  const [numSingleItems, setNumSingleItems] = useState(1);
  return (
    <div className="cart-container">
      <div className="main-cart">
        <div className="cart-header">
          <p>SHOPPING BAG</p>
          <p className="cart-close" onClick={() => setCartOpen(false)}>
            CLOSE X
          </p>
        </div>
        {cartItems.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={image} alt="" />
            <div className="cart-item-details">
              <p>{item.title.toUpperCase()}</p>
              <p className="quantity">
                <span>
                  <button
                    className="adjust-quantity"
                    onClick={() => setNumSingleItems((i) => i - 1)}
                  >
                    -
                  </button>
                </span>
                {numSingleItems}
                <span>
                  <button
                    className="adjust-quantity"
                    onClick={() => setNumSingleItems((i) => i + 1)}
                  >
                    +
                  </button>
                </span>
              </p>
            </div>
            <div className="cart-item-prices">
              <p> R{(item.price + (item.price * 20) / 100).toFixed(2)}</p>
              <button
                className="cart-close"
                onClick={() => deleteItemFromCart(item)}
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
