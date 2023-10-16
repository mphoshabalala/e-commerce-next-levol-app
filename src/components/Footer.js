import React from "react";
import easyExchange from "../images/easyexchange.png";
import easyReturn from "../images/easyreturn.png";
import fastShipping from "../images/fastshipping.png";
import customerCare from "../images/customercare.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="customer-needs">
        <div id="easy-exchange">
          <img src={easyExchange} alt="" />
          <p>EASY EXCHANGE</p>
        </div>
        <div id="easy-return">
          <img src={easyReturn} alt="" />
          <p>EASY RETURN</p>
        </div>
        <div id="fast-shipping">
          <img src={fastShipping} alt="" />
          <p>FAST SHIPPING</p>
        </div>
        <div id="customer-care">
          <img src={customerCare} alt="" />
          <p>24/7 CUSTOMER CARE</p>
        </div>
      </div>
      <div className="main-footer">
        <div className="navigation">
          <div className="company">
            <ul>
              <li>
                <p>COMPANY</p>
              </li>
              <li>
                <a href="#1">SHOP</a>
              </li>
              <li>
                <Link to="/collection/all">COLLECTIONS</Link>
              </li>
              <li>
                <a href="/about-us">ABOUT</a>
              </li>
            </ul>
          </div>
          <div className="support">
            <ul>
              <li>
                <p>SUPPORT</p>
              </li>
              <li>
                <a href="#1">RETURNS</a>
              </li>
              <li>
                <a href="#1">EXCHANGE</a>
              </li>
              <li>
                <a href="#1">SHIPPING</a>
              </li>
              <li>
                <a href="#1">CONTACTS</a>
              </li>
            </ul>
          </div>
          <div className="information">
            <ul>
              <li>
                <p>INFORMATION</p>
              </li>
              <li>
                <a href="#1">PRIVACY POLICY</a>
              </li>
              <li>
                <a href="#1">TERMS OF USE</a>
              </li>
            </ul>
          </div>
          <div className="follow-us">
            <ul>
              <li>
                <p>FOLLOW US</p>
              </li>
              <li>
                <a href="#1">FACEBOOK</a>
              </li>
              <li>
                <a href="#1">X</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="our-newsletter">
          <p>NEWSLETTER + 10% OFF</p>
          <p className="main-text">
            Get 10% off on your first order. We’ll only send you updates on new
            releases and exclusive offers, promise.
          </p>
          <a href="#2" className="newsletter-button">
            GET 10%
          </a>
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} URACLINE SPACE COMPANY
      </div>
    </footer>
  );
}
