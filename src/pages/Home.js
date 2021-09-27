import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Articles />
      <Footer />
    </div>
  );
};

export default Home;
