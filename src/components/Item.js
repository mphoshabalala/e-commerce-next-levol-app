import React from "react";
import image from "../images/jersey.jpeg";

export default function Item({ item }) {
  return (
    <div className="item">
      <img
        src={image} //replace with item.image from the api
        alt={item.title} //replace with item title
        className="item-image hoverable"
      />
      <div className="item-details">
        <h4 className="item-title">Item {item.id} title</h4>
        <div className="item-prices">
          <p className="item-price">R{item.price.toFixed(2)}</p>
          <p className="item-price-discount">
            R{(item.price + (item.price * 20) / 100).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
