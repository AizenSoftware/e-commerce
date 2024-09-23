import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import CartModal from "../components/CartModal";

const Home = () => {
  return (
    <>
      <CartModal />
      <Hero />
      <Cards />
    </>
  );
};

export default Home;
