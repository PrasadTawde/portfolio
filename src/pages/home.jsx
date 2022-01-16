import React from "react";
import Hero from "./hero";
import Skills from "./skills";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Skills />
      </div>
    );
  }
}

export default Home;
