import bg from "../../image/Card/background.jpg";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="front">
        <div className="thumbnail">
          <img src={bg} alt="!" />
        </div>
        <div className="details">
          <h3>Hitman</h3>
          <p>16th Jan, 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
