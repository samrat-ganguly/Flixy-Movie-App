import "../styles/home/main.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faMagnifyingGlass,
  faFireFlameCurved,
  faStar,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../components/card/card";

const Home = () => {
  return (
    <div className="flixy">
      <section id="home">
        <h1 className="movie-name">Witcher 3 : Wild Hunt</h1>
        <div className="back-img"></div>
        <div className="fade"></div>
      </section>

      <div className="body-container">
        <div className="navbar">
          <div className="icons">
            <a href="#home">
              <FontAwesomeIcon icon={faHouseUser} />
            </a>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faFireFlameCurved} />
            <FontAwesomeIcon icon={faStar} />
            <a href="./about-us/about-us.js" target="_blank">
              <FontAwesomeIcon icon={faCrown} />
            </a>
          </div>
        </div>

        <div className="list">
          <div className="Top_Grossing top-line-break ">
            <fieldset>
              <legend>Top Grossing</legend>
            </fieldset>
            <div className="pad">
              <div className="card-lists">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>

          <div className="Popular top-line-break ">
            <fieldset>
              <legend>Popular</legend>
            </fieldset>
            <div className="pad">
              <div className="card-lists">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>

          <div className="Upcoming top-line-break ">
            <fieldset>
              <legend>Upcoming</legend>
            </fieldset>
            <div className="pad">
              <div className="card-lists">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
