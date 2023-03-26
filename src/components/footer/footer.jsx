import icon1 from "../../icons/icons8-film-reel-80.png";
import vid1 from "../../image/Footer/vid1-unscreen.gif";
import vid3 from "../../image/Footer/vid3.gif";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={icon1} className="logo1" alt="!" />
        <p className="logo2">&#169;FLIXY</p>
        <img src={vid1} className="logo3" alt="!" />
      </div>
    </footer>
  );
};

export default Footer;
