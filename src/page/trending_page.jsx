import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../components/card/card";

import "../styles/trending_page/trending_page.css";

const TrendingPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
        );
        setMovies([...movies, ...res.data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  console.log(movies);
  return (
    <div className="Trending_page">
      <div className="Trending_page_container">
        <div className="Trending_page_container_heading">
          <h1>TOP TRENDING</h1>
        </div>
        <div className="Trending_page_container_card_lists">
          {movies.map((e) => {
            return (
              <Link
                to={`/content/${e.id}`}
                style={{ textDecoration: "none" }}
                key={e.id}
              >
                <Card
                  title={e.title}
                  img={e.poster_path}
                  date={e.release_date}
                />
              </Link>
            );
          })}
        </div>
        <div className="Trending_page_container_more_content">
          <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingPage;
