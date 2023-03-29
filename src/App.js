import Loader from "./page/loader";
import Home from "./page/home";
import Content from "./page/content";
import Search from "./page/search";
import AboutUs from "./page/aboutUs";
import Footer from "./components/footer/footer";
import Error from "./page/error/error";

import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import PopularPage from "./page/popular_page";
import TrendingPage from "./page/trending_page";

const App = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3350);
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
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/error" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
