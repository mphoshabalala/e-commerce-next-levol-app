import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

export default function CreateAccount() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="main-login">
        <form>
          <p className="form-title">CREATE ACCOUNT</p>
          <input type="text" placeholder="FIRST NAME" required />
          <input type="email" placeholder="LAST NAME" required />
          <input type="email" placeholder="EMAIL" required />
          <input type="password" placeholder="PASSWORD" required />
          <a className="call-to-action" href="#1">
            CREATE
          </a>
          <Link to="/account/login">RETURN TO LOGIN</Link>
        </form>
      </div>
      <Footer />
    </>
  );
}
