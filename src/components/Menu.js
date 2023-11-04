import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ setIsMenuOpen }) {
  return (
    <div className="menuBar">
      <ul>
        <li>
          <Link
            onClick={() => setIsMenuOpen((prev) => !prev)}
            to={{
              pathname: `/`,
            }}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen((prev) => !prev)}
            to={{
              pathname: `/account/login`,
            }}
          >
            ACCOUNT
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen((prev) => !prev)}
            to={{
              pathname: `/collection/men`,
            }}
          >
            MEN
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen((prev) => !prev)}
            to={{
              pathname: `/collection/electronics`,
            }}
          >
            ELECTRONICS
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen((prev) => !prev)}
            to={{
              pathname: `/collection/women`,
            }}
          >
            WOMAN
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen((prev) => !prev)}
            to={{
              pathname: `/collection/jewelery`,
            }}
          >
            JEWELERY
          </Link>
        </li>
      </ul>
    </div>
  );
}
