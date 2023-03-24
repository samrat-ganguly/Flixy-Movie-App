import logo from "../../image/Footer/c-reel.png";
import icon1 from "../../icons/icons8-film-reel-80.png";
import vid1 from "../../image/Footer/vid1-unscreen.gif";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={icon1} className="logo icon1" alt="!" />
        <p>&#169;FLIXY</p>
        <img src={vid1} className="logo" alt="!" />
      </div>
    </footer>
  );
};

export default Footer;
