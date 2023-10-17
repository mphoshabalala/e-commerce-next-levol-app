// import React, { useEffect, useState } from "react";
import Clotheslist from "../components/Clotheslist";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Accesoriesgroups from "../components/Accesoriesgroups";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Homepage() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Hero />
      <Clotheslist />
      <Accesoriesgroups />
      <Footer />
    </div>
  );
}
