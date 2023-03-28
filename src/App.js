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
import PopularPage from "./page/popular_page";

const App = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 100);
  }, []);
  return (
    <div className="App">
      {loader ? (
        <Loader />
      ) : (
        <div>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/content/:id" element={<Content />} />
            <Route path="/search" element={<Search />} />
            <Route path="/popular" element={<PopularPage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
