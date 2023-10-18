import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useItems } from "../contexts/ItemsContext";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import image from "../images/jersey.jpeg";
import Item from "../components/Item";
import ScrollToTop from "../components/ScrollToTop";
import { useCart } from "../contexts/CartContext";

export default function ProductDetails() {
  const { handleAddToCart } = useCart();
  const location = useLocation();
  const [showDetails, setShowDetails] = useState(false);
  const itemId = location.pathname.split("/").pop();
  const {
    womensClothes,
    isLoading,
    getItem,
    currentItem,
    mensClothes,
    electronicItems,
    jewelery,
  } = useItems();
  useEffect(() => {
    getItem(itemId);
  }, [itemId]);

  let itemDescriptionSummary = "";
  if (currentItem && currentItem.description) {
    itemDescriptionSummary = currentItem.description
      .split(" ")
      .slice(0, 10)
      .join(" ");
  }
  function filterItems(itemList) {
    return itemList.slice(0, 4); // Slice the first four items
  }

  if (isLoading) return <Loading />;
  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="detailed-item">
        <div className="item-images">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
        {currentItem.category === "electronics" ? (
          <div className="device-specs details">
            <p className="detailed-item-title">{currentItem.title}</p>
            <p className="detailed-item-price">
              R{(currentItem.price - currentItem.price * (20 / 100)).toFixed(2)}
            </p>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(currentItem)}
            >
              ADD TO CART
            </button>
            {showDetails ? (
              <div className="specs">
                {currentItem.description}
                <span>
                  <button
                    className="details-button"
                    onClick={() => setShowDetails((prev) => !prev)}
                  >
                    show less
                  </button>
                </span>
              </div>
            ) : (
              <div className="specs">
                {itemDescriptionSummary}
                <span>
                  <button
                    className="details-button"
                    onClick={() => setShowDetails((prev) => !prev)}
                  >
                    ...show more.
                  </button>
                </span>
              </div>
            )}
          </div>
        ) : currentItem.category !== "jewelery" ? (
          <div className="clothes-details details">
            <p className="detailed-item-title">{currentItem.title}</p>
            <p className="detailed-item-price">
              R{(currentItem.price - currentItem.price * (20 / 100)).toFixed(2)}
            </p>
            <p className="detailed-item-size">SIZE</p>
            <div className="sizes-list">
              <ul>
                <li className="active">XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(currentItem)}
              >
                ADD TO CART
              </button>
            </div>
            {showDetails ? (
              <div className="specs">
                {currentItem.description}
                <span>
                  <button
                    className="details-button"
                    onClick={() => setShowDetails((prev) => !prev)}
                  >
                    show less
                  </button>
                </span>
              </div>
            ) : (
              <div className="specs">
                {itemDescriptionSummary}
                <span>
                  <button
                    className="details-button"
                    onClick={() => setShowDetails((prev) => !prev)}
                  >
                    ...show more.
                  </button>
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="jewelery-details details">
            <p className="detailed-item-title">{currentItem.title}</p>
            <p className="detailed-item-price">
              R{(currentItem.price - currentItem.price * (20 / 100)).toFixed(2)}
            </p>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(currentItem)}
            >
              ADD TO CART
            </button>
            {showDetails ? (
              <div className="specs">
                {currentItem.description}
                <span>
                  <button
                    className="details-button"
                    onClick={() => setShowDetails((prev) => !prev)}
                  >
                    show less.
                  </button>
                </span>
              </div>
            ) : (
              <div className="specs">
                {itemDescriptionSummary}
                <span>
                  <button
                    className="details-button"
                    onClick={() => setShowDetails((prev) => !prev)}
                  >
                    ...show more.
                  </button>
                </span>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="categories-title">
        <p>YOU MAY ALSO LIKE</p>
      </div>
      {currentItem.category === "electronics" ? (
        <div className="electronics-suggestion list-items">
          {filterItems(electronicItems).map((item) => (
            <Link
              key={item.id}
              to={{
                pathname: `/products/${item.id}`,
                search: `?title=${encodeURIComponent(item.title)}`,
              }}
            >
              <Item item={item} />
            </Link>
          ))}
        </div>
      ) : currentItem.category === "men's clothing" ? (
        <div className="clothes-suggestion list-items">
          {filterItems(mensClothes).map((item) => (
            <Link
              key={item.id}
              to={{
                pathname: `/products/${item.id}`,
                search: `?title=${encodeURIComponent(item.title)}`,
              }}
            >
              <Item item={item} />
            </Link>
          ))}
        </div>
      ) : currentItem.category === "women's clothing" ? (
        <div className="clothes-suggestion list-items">
          {filterItems(womensClothes).map((item) => (
            <Link
              key={item.id}
              to={{
                pathname: `/products/${item.id}`,
                search: `?title=${encodeURIComponent(item.title)}`,
              }}
            >
              <Item item={item} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="jewelery-suggestion list-items">
          {filterItems(jewelery).map((item) => (
            <Link
              key={item.id}
              to={{
                pathname: `/products/${item.id}`,
                search: `?title=${encodeURIComponent(item.title)}`,
              }}
            >
              <Item item={item} />
            </Link>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}
