import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Info from "../components/Info";
import Calculator from "../components/Calculator";
import Cards from "../components/Cards";
import Information from "../components/Information";
import Subscription from "../components/Subscription";

export default function Home() {
  return (
    <div className="duration-1000">
      {/* <NavBar /> */}
      <Hero />
      <Stats />
      <Info />
      <Calculator />
      <Cards />
      <Information />
      <Subscription />
      {/* <Footer />
      <Socials /> */}
    </div>
  );
}
