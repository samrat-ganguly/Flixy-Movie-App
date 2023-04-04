import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

import Card from "../components/card/card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faMagnifyingGlass,
  faFireFlameCurved,
  faStar,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/home/main.css";

const Home = () => {
  const movie = useGlobalContext();
  const [image, setImage] = useState(0);

  let i = 0;

  useEffect(() => {
    setTimeout(() => {
      setImage((image + 1) % 20);
    }, 10000);
  }, [image]);

  return (
    <div className="flixy">
      <section id="home">
        <h1 className="movie-name">
          {movie?.grossing?.length ? `${movie.grossing[image].title}` : ""}
        </h1>
        <div className="back-img">
          <img
            src={
              movie?.grossing?.length
                ? `https://image.tmdb.org/t/p/original${movie.grossing[image].backdrop_path}`
                : ""
            }
            alt="!"
          />
        </div>
        <div className="fade"></div>
      </section>

      <div className="body-container">
        <div className="navbar">
          <div className="icons">
            <a href="#home">
              <FontAwesomeIcon icon={faHouseUser} />
            </a>
            <Link to="/search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
            <Link to="/trending">
              <FontAwesomeIcon icon={faFireFlameCurved} />
            </Link>
            <Link to="/popular">
              <FontAwesomeIcon icon={faStar} />
            </Link>
            <Link to="/aboutUs">
              <FontAwesomeIcon icon={faCrown} />
            </Link>
          </div>
        </div>

        <div className="list">
          <div className="Top_Grossing top-line-break ">
            <fieldset>
              <legend>Top Grossing</legend>
            </fieldset>
            <div className="pad">
              <div className="card-lists">
                {movie.grossing.length !== 0
                  ? movie.grossing.map((e) => {
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
                  : ""}
              </div>
            </div>
          </div>

          <div className="Popular top-line-break ">
            <fieldset>
              <legend>Popular</legend>
            </fieldset>
            <div className="pad">
              <div className="card-lists">
                {movie.popular.length !== 0
                  ? movie.popular.map((e) => {
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
                  : ""}
              </div>
            </div>
          </div>

          <div className="Upcoming top-line-break ">
            <fieldset>
              <legend>Upcoming</legend>
            </fieldset>
            <div className="pad">
              <div className="card-lists">
                {movie.upcoming.length !== 0
                  ? movie.upcoming.map((e) => {
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
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
