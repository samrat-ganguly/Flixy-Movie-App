import logo from "../../image/Footer/c-reel.png";
import vid1 from "../../image/Footer/vid1-unscreen.gif";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logo} className="logo" alt="!" />
        <p>&#169;FLIXY</p>
        <img src={vid1} className="logo" alt="!" />
      </div>
    </footer>
  );
};

export default Footer;
