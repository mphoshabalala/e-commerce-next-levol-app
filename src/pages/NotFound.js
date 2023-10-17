import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function NotFound() {
  return (
    <>
      <Header />
      <ScrollToTop />
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
