import React from "react";
import { useItems } from "../contexts/ItemsContext";
import { Link } from "react-router-dom";
import Item from "../components/Item";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
export default function AllProducts() {
  const { items, isLoading } = useItems();
  if (isLoading) return <Loading listName={"ALL PRODUCTS"} />;

  return (
    <>
      <Header />
      <div className="categories-title">
        <p>ALL PRODUCTS</p>
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
      <Footer />
    </>
  );
}
