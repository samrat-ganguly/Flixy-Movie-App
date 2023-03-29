import React from "react";
import dino from "../../image/Search/dino-100.png";

import "./error.css";

const Error = () => {
  return (
    <div className="Error">
      <div className="Error_container">
        <img src={dino}></img>
        <h1>404</h1>
      </div>
    </div>
  );
};

export default Error;
