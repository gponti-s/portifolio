import { useState } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "./Offcanvas";
import { loginUser } from "../api/auth";
import LoginModal from "./LoginModal";
import { useAuth } from "../contexts/AuthContext";

function Navbar({ allRoutes }) {
  let [isWalletConnectedSwitch, setWalletConnectedSwitch] = useState(false); //TO DO: get this state from ether
  const { isLoggedIn, setIsLoggedIn, appTitle, appSubTitle } = useAuth();
  let [showModal, setShowModal] = useState(false);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  async function handleLogin() {
    const response = await loginUser(username, password);
    if (response) {
      //TODO: rewei this state. Check login
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
      className="navbar bg-dark border-bottom border-body fixed-top"
      data-bs-theme="dark"
      style={{ opacity: "0.9" }}
    >
      <div className="container-fluid">
        <Offcanvas allRoutes={allRoutes}></Offcanvas>

        <div className=" me-auto mb-2 mb-lg-0">
        {/* <img src="%PUBLIC_URL%/favicon.webp" alt="Logo" /> */}
        <Link to="/" className="navbar-brand " style={{ color: "white" }}>
            {appTitle}
          </Link>
          <Link to="/" className="navbar-text" style={{ textDecoration: "none" }}>{appSubTitle}</Link>
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
