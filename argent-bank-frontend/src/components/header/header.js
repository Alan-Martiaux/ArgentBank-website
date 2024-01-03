import "../../css/main.css";
import Logo from "../../image/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Usercircle = <FontAwesomeIcon icon={faUserCircle} />;
function Header() {
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
        <Link to="/signIn" className="main-nav-item">
          <i> {Usercircle}</i>
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Header;

// Ajouter LINK
