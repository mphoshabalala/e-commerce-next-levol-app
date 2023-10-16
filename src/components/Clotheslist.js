import React from "react";
import { useItems } from "../contexts/ItemsContext";
import { Link } from "react-router-dom";
import Item from "./Item";
export default function Clotheslist() {
  const { isLoading, items } = useItems();
  return (
    <div className="new-arrivals">
      <div className="new-arrivals-title">
        <p>NEW ARRIVALS</p>
      </div>
      <div className="list-items">
        {items.map((item) => (
          <Link
            key={item.id}
            to={{
              pathname: `${item.id}`,
              search: `?title=${encodeURIComponent(item.title)}`,
            }}
          >
            <Item item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
