import HashLoader from "react-spinners/HashLoader";
import "../styles/loader/loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <HashLoader color={"#c91dbd"} size={60} />
    </div>
  );
};
export default Loader;
