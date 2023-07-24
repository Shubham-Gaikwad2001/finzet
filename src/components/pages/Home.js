import React from "react";
import Slider from "../inc/Slider";
import Cards from "./Cards";
import Aboutus from "./About";
// import Form from "./Form";

function Home() {
  return (
    <div>
      {/* ..............Sliders.................. */}
      <Slider />

      {/* ..............Cards.................. */}
      <Cards />

      <hr className="featurette-divider" />

      {/* ..............About Us.................. */}
      <Aboutus />

      {/* <Form /> */}
    </div>
  );
}

export default Home;
