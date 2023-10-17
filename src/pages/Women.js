import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useItems } from "../contexts/ItemsContext";
import { Link } from "react-router-dom";
import Item from "../components/Item";
import Loading from "../components/Loading";
import ScrollToTop from "../components/ScrollToTop";

export default function Women() {
  const { womensClothes, isLoading } = useItems();

  if (isLoading) return <Loading listName={"WOMEN CLOTHES"} />;
  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="categories-title">
        <p>WOMEN CLOTHES</p>
      </div>
      <div className="list-items">
        {womensClothes.map((item) => (
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
      <Footer />
    </>
  );
}
