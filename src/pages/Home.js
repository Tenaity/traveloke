import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import FeatureEndow from "../components/FeatureEndow";
import Discovery from "../components/Discovery";
import Partner from "../components/Partner";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureEndow />
      <Articles />
      <Partner />
      <Feature />
      <Discovery />
      <Footer />
    </div>
  );
};

export default Home;
