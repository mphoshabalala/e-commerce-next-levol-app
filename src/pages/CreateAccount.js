import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function CreateAccount() {
  return (
    <>
      <Header />
      <div className="main-login">
        <form>
          <p className="form-title">CREATE ACCOUNT</p>
          <input type="text" placeholder="FIRST NAME" />
          <input type="email" placeholder="LAST NAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
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
