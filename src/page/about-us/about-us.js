import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

// let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
// let flagPoles = CSSRulePlugin.getRule(".card:before");

// tl.to("h1", {
//   "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
//   opacity: 1,
//   y: 0,
//   duration: 2.2,
// });
// tl.to(
//   ".form",
//   {
//     "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
//     opacity: 1,
//     y: 0,
//   },
//   "-=2"
// );
// tl.from(".card", { scaleY: 0, stagger: 0.2 }, "-=2");
// tl.from(
//   flagPoles,
//   { stagger: 1, opacity: 0, transform: "translateY(100px)" },
//   "-=2"
// );
// tl.to(
//   ".title, .desc",
//   { stagger: 0.1, duration: 1.2, opacity: 1, y: 0 },
//   "-=2"
// );
// tl.to("footer", { opacity: 1 }, "-=2");

const About_us = () => {
  return (
    <div className="about-us">
      <div className="wrapper">
        <header>
          <a href="">Blank Canvas Cafe</a>
        </header>

        <main>
          <div className="col2 hero">
            <h1>
              <span>A</span>
              <span>Small</span>
              <span>Ambition</span>
              <span>Sparks</span>
              <span>The</span>
              <span>Ignition</span>
            </h1>
            <div className="form">
              <label for="email">Feedback : </label>
              <div className="feedback">
                <input
                  type="text"
                  className="review"
                  id="email"
                  placeholder="Your Review"
                />
                <div className="send">
                  <input type="text" id="email" placeholder="Email" />
                  <input type="submit" value="SEND" />
                </div>
              </div>
            </div>
          </div>
          <div className="features">
            <div className="card">
              <p className="title">Immersive</p>
              <p className="desc">
                Have we been able to provide you with a Visual Treat ?
              </p>
            </div>
            <div className="card">
              <p className="title">Customizable</p>
              <p className="desc">
                Our Items comes with customizable features. You can customize
                anything starting from toppins to sweetness.
              </p>
            </div>
            <div className="card">
              <p className="title">Online & Managed Payments</p>
              <p className="desc">
                Offer parity pricing, and leave the headache of processing to
                us.
              </p>
            </div>
            <div className="card">
              <p className="title">Trackable</p>
              <p className="desc">
                Track your order hassel-free with the new geo-get location
                service.
              </p>
            </div>
          </div>
        </main>
      </div>
      <footer>
        <div className="parent">
          <div>
            <p className="all">&#169; BLANK CANVAS CAFE</p>
          </div>
          <div className="col2 social">
            <p className="learn">To learn more about me click the icon</p>
            <FontAwesomeIcon icon={faArrowRight} />
            <a href="https://samrat-ganguly.github.io/" target="_blank">
              <FontAwesomeIcon icon={faUserAstronaut} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About_us;
