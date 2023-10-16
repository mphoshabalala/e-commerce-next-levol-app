import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Accesoriesgroups() {
  useEffect(() => {
    const accessoryLinks = document.querySelectorAll(".accesory");

    accessoryLinks.forEach((accessoryLink) => {
      const accessoryButton = accessoryLink.querySelector(".accesories-button");

      accessoryLink.addEventListener("mouseover", () => {
        accessoryButton.style.backgroundColor = "black";
        accessoryButton.style.color = "white";
        accessoryButton.style.transition = "all .5s ease";
      });

      accessoryLink.addEventListener("mouseout", () => {
        accessoryButton.style.backgroundColor = "white";
        accessoryButton.style.color = "black";
        accessoryButton.style.transition = "all .5s ease";
      });
    });
  });
  return (
    <div className="accesories-group-container">
      <div className="accesories-group-1 ">
        <Link
          id="accesories-clothes"
          className="accesories-group-1-item accesory hoverable"
          to="/collection/all-clothes"
        >
          <h1>CLOTHES</h1>
          <p className="accesories-button" href="#1">
            SHOP NOW
          </p>
        </Link>
        <Link
          id="accesories-jewelery"
          className="accesories-group-1-item accesory hoverable"
          to="/collection/jewelery"
        >
          <h1>JEWELERY</h1>
          <p className="accesories-button" href="#1">
            SHOP NOW
          </p>
        </Link>
      </div>
      <Link
        to="/collection/electronics"
        className="accesories-electronics accesory hoverable"
      >
        <h1>ELECTRONICS</h1>
        <p className="accesories-button" href="#1">
          SHOP NOW
        </p>
      </Link>
    </div>
  );
}
