import "../../css/main.css";
import Logo from "../../image/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

const Usercircle = <FontAwesomeIcon icon={faUserCircle} />;
const Signout = <FontAwesomeIcon icon={faSignOut} />;
function Header() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.user.userName);
  const token = useSelector((state) => state.user.token);

  const handlelogout = () => {
    console.log(token);
    dispatch(logout());
  };
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {token ? (
          <Link onClick={handlelogout} className="main-nav-item">
            <i> {Usercircle}</i>
            {userName}
            <i> {Signout}</i>
            Log Out
          </Link>
        ) : (
          <Link to="/signIn" className="main-nav-item">
            <i> {Usercircle}</i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;

// Ajouter LINK
