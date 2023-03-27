import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faMagnifyingGlass,
  faFireFlameCurved,
  faStar,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

import Card from "../components/card/card";

import home_bg from "../image/Home/home_bg.jpg";

import "../styles/home/main.css";

const Home = () => {
  const movie = useGlobalContext();

  return (
    <div className="flixy">
      <section id="home">
        <h1 className="movie-name">Witcher 3 : Wild Hunt</h1>
        <div className="back-img">
          <img className="" src={home_bg} alt="!" />
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
            <FontAwesomeIcon icon={faFireFlameCurved} />
            <FontAwesomeIcon icon={faStar} />
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
                          to="/content/${e.id}"
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
                          to="/content"
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
                          to="/content"
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
