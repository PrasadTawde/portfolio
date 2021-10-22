import React, { Component } from "react";
import SeoHeader from "../parts/seoHeader";
import Header from "../parts/header";
import Hero from "./hero";
import Footer from "../parts/footer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <SeoHeader />
        <Header />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default Home;
