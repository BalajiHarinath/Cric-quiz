import "../../css/main.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useQuiz, useAuth } from "../../context";

export const Navbar = () => {
  const { setAnswers, setScore } = useQuiz();
  const { authData, logout } = useAuth();
  const { _id, firstName } = authData;

  const homeClickHandler = () => {
    setScore(0);
    setAnswers([]);
  };
  const userId = _id;

  return (
    <nav className="navbar flex">
      <Link 
        onClick={homeClickHandler}
        to="/"
        className="nav-header "
        >Cric Quiz
      </Link>
      <div className="nav-login flex flex-align-center flex-gap-2">
        <Link
          onClick={homeClickHandler}
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
        <Link
          to={`${userId ? "/profile" : "/signup"}`} 
          className="flex flex-column flex-justify-center flex-align-center"
        >
          <span>
            <i
              className="fa fa-user-circle fa-lg nav-icon text-2xl"
              aria-hidden="true"
            ></i>
          </span>
          <span className="nav-icon-text text-sm">{`${userId ? firstName : "Login"}`}</span>
        </Link>

        {
          userId && 
          <Link
          onClick={() => logout()}
          to="/login"
          className="flex flex-column flex-justify-center flex-align-center"
          >
            <span>   
              <i
                className="fa fa-sign-out fa-lg nav-icon text-2xl"
                aria-hidden="true"
              ></i>
            </span>
            <span className="nav-icon-text text-sm">Logout</span>
        </Link>
        }
        
      </div>
    </nav>
  );
};
