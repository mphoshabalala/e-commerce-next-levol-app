import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Loading({ listName }) {
  return (
    <div className="loading-state">
      <Header />
      <div className="categories-title">
        <p>{listName}</p>
      </div>
      <div className="loading-signal">
        <p>Loading...</p>
      </div>
      <Footer />
    </div>
  );
}
