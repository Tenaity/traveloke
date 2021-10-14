import React from "react";
import Navbar from "../components/Navbar";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import FeatureEndow from "../components/FeatureEndow";
import Discovery from "../components/Discovery";
import Partner from "../components/Partner";
import CarouselBanner from "../components/CarouselBanner";
import Carousels from "../components/Carousels";
const Home = () => {
  return (
    <div>
      <Navbar />
      <CarouselBanner />
      <FeatureEndow />
      <Carousels />
      <Articles />
      <Partner />
      <Feature />
      <Discovery />
      <Footer />
    </div>
  );
};

export default Home;
