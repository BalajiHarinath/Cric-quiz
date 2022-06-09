import "../../css/main.css";
import "./Profile.css";
import { useAuth } from "../../context/AuthContext";
import { useScrollToTop, useDocumentTitle } from "../../utils";

export const Profile = () => {
    useScrollToTop();
    useDocumentTitle("Profile");
    const { authData, logout } = useAuth();
    const { _id, firstName, email } = authData;
    return(
        <div className="main-profile">
            <div className="card-profile">
                <div className="card-profile-header">
                    <h5>Profile</h5>
                    <button onClick={() => logout()}>Logout</button>
                </div>
                <div className="card-profile-text">
                    <p className="card-profile-text-header font-bold text-underline">UserDetails</p>
                    <p>Name: {firstName}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>
    )
}