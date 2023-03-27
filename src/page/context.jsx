import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const AppContext = React.createContext();

const API_URL_TOP_GROSSING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
const API_URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`;
const API_URL_UPCOMMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=10`;

const AppProvider = ({ children }) => {
  const [grossing, setGrossing] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching top grossing url
  const getGrossing = async (API_URL_TOP_GROSSING) => {
    const res_grossing = await (await fetch(API_URL_TOP_GROSSING)).json();
    try {
      if (res_grossing.length !== 0) {
        console.log("Grossing", res_grossing);
        setLoading(false);
        setGrossing(res_grossing.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fetching top grossing url
  const getPopular = async (API_URL_POPULAR) => {
    const res_popular = await (await fetch(API_URL_POPULAR)).json();
    // console.log("Popular", res_popular);
    try {
      if (res_popular) {
        setLoading(false);
        setPopular(res_popular.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fetching top grossing url
  const getUpcoming = async (API_URL_UPCOMMING) => {
    const res_upcoming = await (await fetch(API_URL_UPCOMMING)).json();
    // console.log("Upcoming", res_upcoming);
    try {
      if (res_upcoming) {
        setLoading(false);
        setUpcoming(res_upcoming.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // calling at the start of page loading to fetch the respective url
  useEffect(() => {
    getGrossing(API_URL_TOP_GROSSING);
    getPopular(API_URL_POPULAR);
    getUpcoming(API_URL_UPCOMMING);
  }, []);

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
