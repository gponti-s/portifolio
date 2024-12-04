import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "./Offcanvas";
import { loginUser } from "../services/auth";
import LoginModal from "./LoginModal";
import { useAuth } from "../store/AuthContext";

function Navbar({ allRoutes }) {
  const [isWalletConnectedSwitch, setWalletConnectedSwitch] = useState(false);
  const { isLoggedIn, setIsLoggedIn, appTitle, appSubTitle } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  async function handleLogin() {
    const response = await loginUser(username, password);
    if (response) {
      setIsLoggedIn(isLoggedIn === false);
      setShowModal(false);
      const userLogged = JSON.parse(localStorage.getItem("userLogged"));
      console.log(userLogged);
    } else {
      alert("login error");
    }
  }

  return (
    <nav
      className={`navbar fixed-top ${isScrolled ? "bg-dark" : "bg-transparent"}`}
      data-bs-theme="dark"
      style={{ opacity: '0.9' }}
    >
      <div className="container-fluid mx-3">
        <Offcanvas allRoutes={allRoutes}></Offcanvas>

        <div id="appTitle" className="me-auto mb-2 mb-lg-0">
          <Link to="/" className="navbar-brand" style={{ color: "white" }}>
            {appTitle}
          </Link>
          <Link
            to="/"
            className="navbar-text"
            style={{ textDecoration: "none" }}
          >
            {appSubTitle}
          </Link>
        </div>
        <div className="form-check form-switch d-flex">
          <input
            className="form-check-input me-2"
            type="checkbox"
            id="flexSwitchCheckDefault"
            style={{ margin: "auto" }}
            onClick={() => {
              console.log("Checkbox clicked");
              setWalletConnectedSwitch(!isWalletConnectedSwitch);
            }}
          />
          <span className="navbar-text me-2" style={{ color: "white" }}>
            {isWalletConnectedSwitch ? "Wallet Connected" : "Connect Wallet"}
          </span>
        </div>
        <button
          className="btn btn-outline-secondary ms-2"
          onClick={() => setShowModal(true)}
          style={{ color: "white" }}
        >
          {isLoggedIn ? "logout" : "login"}
        </button>
      </div>

      <LoginModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleLogin={handleLogin}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    </nav>
  );
}

export default Navbar;
