import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../components/card/card";
import Loader from "./loader";
import Error from "./error/error";

import "../styles/popular_page/popular_page.css";

const PopularPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      );
      if (res) {
        setLoading(false);
        setMovies([...movies, ...res.data.results]);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return (
    <div className="Popular_page">
      <div className="Popular_page_container">
        <div className="Popular_page_container_heading">
          <h1>POPULAR</h1>
        </div>
        <div className="Popular_page_container_card_lists">
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
        <div className="Popular_page_container_more_content">
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

export default PopularPage;
