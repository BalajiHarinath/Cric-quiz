import "../../css/main.css";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer flex flex-column flex-justify-center flex-align-center pdb-1">
      <div className="footer-header text-base">
        Made with <span>&lt;/&gt;</span> by Balaji BH
      </div>
      <ul className="flex list-style-none footer-social-icons">
        <li>
          <Link to="https://github.com/BalajiHarinath">
            <i className="fa fa-github fa-lg" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com/balaji_harinath">
            <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/balaji-harinath-90a56518a">
            <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
      <div className="footer-copy">© 2022 Cric Quiz</div>
    </footer>
  );
};
