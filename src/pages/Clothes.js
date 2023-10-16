import React from "react";
import Header from "../components/Header";
import { useItems } from "../contexts/ItemsContext";
import { Link } from "react-router-dom";
import Item from "../components/Item";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

export default function Clothes() {
  const { allClothes, isLoading } = useItems();

  if (isLoading) return <Loading listName={"ALL CLOTHES"} />;
  return (
    <>
      <Header />
      <div className="categories-title">
        <p>ALL CLOTHES</p>
      </div>
      <div className="list-items">
        {allClothes.map((item) => (
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
