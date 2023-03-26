import "../styles/content/content.css";
import pic from "../image/Home/content_bg.jpeg";

import Card from "../components/card/card";

const Content = () => {
  return (
    <div className="content">
      <main>
        <div className="content-home">
          <img src={pic} alt="!"></img>

          <div className="movie-details">
            <h1>Witcher 3 : Wild Hunt</h1>
            <h3>"Medallions Humming , GOTY its gotta be"</h3>

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

            <p>
              The game takes place in a fictional fantasy world based on Slavic
              mythology. Players control Geralt of Rivia, a monster slayer for
              hire known as a Witcher, and search for his adopted daughter, who
              is on the run from the otherworldly Wild Hunt. Players battle the
              game's many dangers with weapons and magic, interact with
              non-player characters, and complete quests to acquire experience
              points and gold, which are used to increase Geralt's abilities and
              purchase equipment.
            </p>

            <div className="movie-content">
              <h3>Directed By : </h3>
              <h3>Andrie Sapowskey</h3>
            </div>
          </div>

          <div className="a"></div>
          <div className="b"></div>
          <div className="c"></div>
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
      </section>
    </div>
  );
};

export default Content;
