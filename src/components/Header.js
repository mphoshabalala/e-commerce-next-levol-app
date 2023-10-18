import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useCart } from "../contexts/CartContext";
export default function Header() {
  // const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(-100);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const { cartOpen, setCartOpen } = useCart();
  const cartContainerRef = useRef(null);

  useEffect(() => {});

  // to be fixed
  useEffect(
    () => {
      // window.addEventListener("click", (e) => {
      //   if (e.target.className === "cart") {
      //     setCartOpen(true);
      //   } else {
      //     setCartOpen(false);
      //   }
      // });
      function handleScroll() {
        const newScrollPosition = window.scrollY;
        if (newScrollPosition > previousScrollPosition) {
          setIsScrollingDown(true);
        } else {
          setIsScrollingDown(false);
        }
        setPreviousScrollPosition(newScrollPosition);
      }

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },

    // listen to scroll and close cart
    [previousScrollPosition]
  );

  const headerStyle = {
    transition: "  top 0.3s ease-in-out", // Smoothly transition max-height
    top: isScrollingDown ? -200 : 0,
  };
  return (
    <>
      <header className="main-header" style={headerStyle}>
        <div className="header-container">
          <div className="categories-and-logo">
            <h1 className="logo">
              <Link
                to={{
                  pathname: `/`,
                }}
              >
                NextLevol
              </Link>
            </h1>
            <div className="categories">
              <ul>
                <li>
                  <Link
                    to={{
                      pathname: `/collection/men`,
                    }}
                  >
                    MEN
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: `/collection/electronics`,
                    }}
                  >
                    ELECTRONICS
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: `/collection/women`,
                    }}
                  >
                    WOMEN
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: `/collection/jewelery`,
                    }}
                  >
                    JEWELERY
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="account-and-bag">
            <ul>
              <li>
                <Link
                  to={{
                    pathname: `/account/login`,
                  }}
                >
                  ACCOUNT
                </Link>
              </li>
              <li>
                <a
                  className="cart"
                  ref={cartContainerRef}
                  href="#bag"
                  onClick={() => setCartOpen((prev) => !prev)}
                >
                  <ul className="bag">
                    <li>BAG</li>
                    <li>
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0.25C6.94043 0.25 5.25 1.94043 5.25 4V4.75H1.54688L1.5 5.45312L0.75 18.9531L0.703125 19.75H17.2969L17.25 18.9531L16.5 5.45312L16.4531 4.75H12.75V4C12.75 1.94043 11.0596 0.25 9 0.25ZM9 1.75C10.2422 1.75 11.25 2.75781 11.25 4V4.75H6.75V4C6.75 2.75781 7.75781 1.75 9 1.75ZM2.95312 6.25H5.25V8.5H6.75V6.25H11.25V8.5H12.75V6.25H15.0469L15.7031 18.25H2.29688L2.95312 6.25Z"
                          fill="black"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {cartOpen && <Cart />}
    </>
  );
}
