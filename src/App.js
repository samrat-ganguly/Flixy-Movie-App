import Loader from "./page/loader";
import Home from "./page/home";
import Content from "./page/content";
import Search from "./page/search";
import Footer from "./components/footer/footer";
import "./App.css";

import React, { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Home />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
