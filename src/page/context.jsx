import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

import Loader from "./loader";
import Error from "./error/error";

const AppContext = React.createContext();

const API_URL_TOP_GROSSING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
const API_URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`;
const API_URL_UPCOMMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=10`;

const AppProvider = ({ children }) => {
  const [grossing, setGrossing] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [error, setError] = useState(false);

  // fetching top grossing url
  const getGrossing = async (API_URL_TOP_GROSSING) => {
    const res_grossing = await axios.get(API_URL_TOP_GROSSING);
    try {
      if (res_grossing.length !== 0) {
        setGrossing(res_grossing.data.results);
      }
    } catch (error) {
      setError(true);
    }
  };

  // fetching top grossing url
  const getPopular = async (API_URL_POPULAR) => {
    const res_popular = await axios.get(API_URL_POPULAR);
    // console.log("Popular", res_popular);
    try {
      if (res_popular) {
        setPopular(res_popular.data.results);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  // fetching top grossing url
  const getUpcoming = async (API_URL_UPCOMMING) => {
    const res_upcoming = await axios.get(API_URL_UPCOMMING);
    // console.log("Upcoming", res_upcoming);
    try {
      if (res_upcoming) {
        setUpcoming(res_upcoming.data.results);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  // calling at the start of page loading to fetch the respective url
  useEffect(() => {
    getGrossing(API_URL_TOP_GROSSING);
    getPopular(API_URL_POPULAR);
    getUpcoming(API_URL_UPCOMMING);
  }, []);

  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return (
    <AppContext.Provider value={{ grossing, popular, upcoming }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
