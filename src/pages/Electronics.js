import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useItems } from "../contexts/ItemsContext";
import { Link } from "react-router-dom";
import Item from "../components/Item";
import Loading from "../components/Loading";

export default function Electronics() {
  const { electronicItems, isLoading } = useItems();

  if (isLoading) return <Loading listName={"ELECTRONIC DEVICES"} />;
  return (
    <>
      <Header />
      <div className="categories-title">
        <p>ELECTRONIC DEVICES</p>
      </div>
      <div className="list-items">
        {electronicItems.map((item) => (
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
