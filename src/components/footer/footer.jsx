import icon1 from "../../image/Footer/owl-64.png";
import vid1 from "../../image/Footer/vid1-unscreen.gif";

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
