import "../styles/content/content.css";
import pic from "../image/Home/content_bg.jpeg";
import not_found from "../image/Card/not_found.webp";

import Card from "../components/card/card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getMovieById } from "../apicall";

const Content = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getMovie = async () => {
    try {
      const res1 = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      const res2 = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setMovieData({ ...res1.data, ...res2.data });
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // if (loading) return <div></div>;
  // if (error) return <div></div>;

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="content">
      <main>
        <div className="content-home">
          <img
            src={
              movieData.backdrop_path
                ? `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`
                : ""
            }
            alt="!"
          ></img>

          <div className="movie-details">
            <h1>{movieData.title}</h1>
            <h3>{movieData.tagline}</h3>

            <div className="movie-content">
              <p>2023</p>
              <span></span>
              <p>1h 30m</p>
              <span></span>
              <div className="genre">
                <p>Action</p>
                <p>Adventure</p>
                <p>Thriller</p>
              </div>
            </div>

            <p>{movieData.overview}</p>

            <div className="movie-content">
              <h3>Directed By : </h3>
              <h3>Andrie Sapowskey</h3>
            </div>
          </div>

          <div className="a"></div>
          <div className="b"></div>
        </div>
      </main>

      <section>
        <div className="content-cast">
          <fieldset>
            <legend>Cast</legend>
          </fieldset>
          <div className="pad">
            <div className="cast-lists">
              <Card />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
