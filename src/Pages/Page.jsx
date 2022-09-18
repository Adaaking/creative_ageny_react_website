import React, { useEffect, useRef } from "react";
import Creative from "../components/Creative/Creative";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import Extras from "../components/Extras/Etras";
import ThingsWeDo from "../components/ThingsWeDo/ThingsWeDo";
import Brading from "../components/Brading/Brading";
import Clients from "../components/Clients/Clients";
import Portifolio from "../components/Portifolio/Portifolio";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Page = () => {
  return (
    <Router>
      <Header />
      <Creative />
      <Services />
      <Extras />
      <ThingsWeDo />
      <Brading />
      <Clients />
      <Portifolio />
      <Contact />
      <Footer />
    </Router>
  );
};

export default Page; 
