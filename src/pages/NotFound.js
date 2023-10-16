import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="not-found">
        <div>
          <h1>404 Page Not Found!</h1>
          <p>The url specified does not exist</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
