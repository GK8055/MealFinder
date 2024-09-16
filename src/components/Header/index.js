import "./index.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header_container">
    <Link to="/" className="link_style">
      <h1 className="title">Meal Finder</h1>
    </Link>
    <div className="nav_container">
      <p>Home </p>
      <p>about </p>
    </div>
  </div>
);

export default Header;
