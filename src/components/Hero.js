import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
import shoe from "../images/shoe.jpg";
import device from "../images/device.jpg";
import clothes from "../images/clothes.jpg";
import jewelery from "../images/Jewelery.jpg";

const imageURLs = [shoe, device, clothes, jewelery];
const backgroundColors = [
  "rgba(0, 0, 0, 0.5)",
  "rgba(0, 0, 0, 0.6)",
  "rgba(0, 0, 0, 0.5)",
  "rgba(0, 0, 0, 0.6)",
];

const textColors = [
  "rgba(240, 73, 51,1.0)",
  "rgba(199, 198, 198,1.0)",
  "rgb(29, 30, 32)",
  "rgba(173, 221, 84,1.0)",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currIndex) => (currIndex + 1) % imageURLs.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const backgroundImage = {
    background: `url(${imageURLs[currentImageIndex]}) center/cover no-repeat`,
    backgroundColor: backgroundColors[currentImageIndex],
    backgroundBlendMode: "multiply",
    height: "100vh",
    transition: "background 1s ease-in-out",
  };

  const textStyle = {
    color: textColors[currentImageIndex],
    transition: "color 2s ease",
  };
  return (
    <div>
      <section style={backgroundImage} className="hero hoverable">
        <h1 style={textStyle}>Get Your Next Levol Accessories</h1>
      </section>
    </div>
  );
}
