import Loader from "./page/loader";
import Home from "./page/home";
import Content from "./page/content";
import Search from "./page/search";
import AboutUs from "./page/aboutUs";
import Footer from "./components/footer/footer";

import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

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
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/content" element={<Content />} />
            <Route path="/search" element={<Search />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
