import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Card from "../components/card/card";
import ghost from "../image/Search/dino-100.png";

import "../styles/search/search.css";

const Search = () => {
  const [movie, setMovie] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${inputValue}`
      );
      setMovie({ ...res.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div className="Search">
      <div className="Search_container">
        <div className="Search_container_heading">
          <h1>SEARCH</h1>
        </div>
        <div className="Search_container_input">
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
              e.preventDefault();
            }}
          />
        </div>
        <div className="Search_container_results">
          {inputValue || movie?.results?.length ? (
            movie?.results?.length ? (
              movie.results.map((e) => {
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
              })
            ) : (
              <div className="Search_container_results_not_found">
                <img src={ghost}></img>
                <h3>NO MOVIES MATCHED !!!</h3>
              </div>
            )
          ) : (
            <div className="Search_container_results_not_found">
              <img src={ghost}></img>
              <h3>NO MOVIES MATCHED !!!</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
