import "../../css/main.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar flex">
      <h2 className="nav-header">Cric Quiz</h2>
      <div className="nav-login flex flex-align-center flex-gap-2">
        <Link
          to="/"
          className="flex flex-column flex-justify-center flex-align-center"
        >
          <span>
            <i
              className="fa fa-home fa-lg nav-icon text-2xl"
              aria-hidden="true"
            ></i>
          </span>
          <span className="nav-icon-text text-sm">Home</span>
        </Link>
        <a
          href=""
          className="flex flex-column flex-justify-center flex-align-center"
        >
          <span>
            <i
              className="fa fa-user-circle fa-lg nav-icon text-2xl"
              aria-hidden="true"
            ></i>
          </span>
          <span className="nav-icon-text text-sm">Login</span>
        </a>
      </div>
    </nav>
  );
};
