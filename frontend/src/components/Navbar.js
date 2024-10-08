import { useState } from "react";
import Offcanvas from "./Offcanvas";
import { Modal, Button } from "react-bootstrap";
import { getAllUsers, loginUser } from "../api";

function Navbar({ allRoutes, isMenuVisible, setMenuVisible }) {
  let [isWalletConnectedSwitch, setWalletConnectedSwitch] = useState(false); //TO DO: get this state from ether
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [showModal, setShowModal] = useState(false);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function toggleMenu() {
    setMenuVisible(!isMenuVisible);
  }

  async function handleLogin() {
    console.log("User logged in", username, password);
    const response = await loginUser(username, password);
    if (response){
      //TODO: rewei this state. Check login
      setIsLoggedIn(isLoggedIn === false);
      setShowModal(false);
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          className="bi bi-list me-2"
          viewBox="0 0 16 16"
          cursor="pointer"
          onClick={toggleMenu}
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>

        <div className=" me-auto mb-2 mb-lg-0">
          <span className="navbar-brand" style={{ color: "white" }}>
            Guilherme Seletti
          </span>
          <span className="navbar-text">Portfolio</span>
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
          <span className="navbar-text me-2" style={{ color: "white" }}>{isWalletConnectedSwitch ? "Wallet Connected" : "Connect Wallet"}
          </span>
        </div>
        <button 
          className="btn btn-outline-secondary ms-2" 
          onClick={() => setShowModal(true)} // Open modal on button click
          style={{ color: "white" }}
        >
          {isLoggedIn ? "logout" : "login"}
        </button>
      </div>

      {isMenuVisible && (
        <Offcanvas toggleMenu={toggleMenu} allRoutes={allRoutes} />
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label"><b>Username</b></label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label"><b>Password</b></label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
}

export default Navbar;
