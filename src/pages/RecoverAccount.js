import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function RecoverAccount() {
  return (
    <>
      <Header />
      <div className="main-login">
        <form>
          <p className="form-title">RECOVER ACCOUNT</p>
          <p>RECOVERY DATA WILL BE SENT TO THIS EMAIL</p>
          <input type="email" placeholder="EMAIL" />

          <a className="call-to-action" href="#1">
            SEND EMAIL
          </a>
          <Link to="/account/login">RETURN TO LOGIN</Link>
        </form>
      </div>
      <Footer />
    </>
  );
}
