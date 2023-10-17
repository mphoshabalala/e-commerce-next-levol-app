import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

export default function Login() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="main-login">
        <form>
          <p className="form-title">SIGN IN</p>
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <a className="call-to-action" href="#1">
            SIGN IN
          </a>
          <Link to="/account/create-account">CREATE ACCOUNT</Link>
          <Link to="/account/recover-password">FORGOT PASSWORD</Link>
        </form>
      </div>
      <Footer />
    </>
  );
}
