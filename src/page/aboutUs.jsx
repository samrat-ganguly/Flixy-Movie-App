import React from "react";
import sam1 from "../image/AboutUs/sam.jpeg";
import sam2 from "../image/AboutUs/myself_2.jpg";
import sam3 from "../image/AboutUs/myself_3.jpg";
import sam4 from "../image/AboutUs/myself_4.jpg";
import "../styles/about-us/about.css";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs_container">
        <div className="aboutUs_content">
          <div className="aboutUs_content_name">
            <div className="span">
              <h3>S</h3>
              <h3>A</h3>
              <h3>M</h3>
              <h3>R</h3>
              <h3>A</h3>
              <h3>T</h3>
            </div>

            <div className="span_name">
              <h1>SAMRAT</h1>
              <h1>GANGULY</h1>
            </div>
          </div>

          <div className="aboutUs_content_card">
            <img src={sam1} alt="!" />
          </div>
        </div>

        <div className="aboutUs_details">
          <div className="aboutUs_details_left">
            <div className="image1">
              <img src={sam2} alt="" />
            </div>
            <div className="image2">
              <img src={sam3} alt="" />
            </div>
            <h2>FLIXY</h2>
            <p>
              A movie-app where you can browse and search for any movies ranging
              from past ten decades to present day
            </p>
          </div>

          <div className="aboutUs_details_right">
            <h2>A SMALL IGNITION</h2>
            <h2>SPARKS THE AMBITION</h2>
            <h2></h2>
            <p>Have I been able to provide</p>
            <p>you with a visual treat ?</p>
            <div className="image3">
              <img src={sam4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
