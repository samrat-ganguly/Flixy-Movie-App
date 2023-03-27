import not_found from "../../image/Card/not_found.webp";
import "./card.css";

const Card = ({ title, img, date }) => {
  const getImage = () => {
    if (img === null) {
      return not_found;
    } else {
      return `https://image.tmdb.org/t/p/w500/${img}`;
    }
  };
  return (
    <div className="card">
      <div className="front">
        <div className="thumbnail">
          <img src={getImage()} alt="!" />
        </div>
        <div className="details">
          <h5>{title}</h5>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
