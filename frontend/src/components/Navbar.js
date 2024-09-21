import { useState } from "react";
import Offcanvas from "./Offcanvas";

function Navbar({ allRoutes, isMenuVisible, setMenuVisible }) {
  let [isWalletConnectedSwitch, setWalletConnectedSwitch] = useState(false); //TO DO: get this state from ether

  function toggleMenu() {
    setMenuVisible(!isMenuVisible);
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
      </div>
      {isMenuVisible && (
        <Offcanvas toggleMenu={toggleMenu} allRoutes={allRoutes} />
      )}
    </nav>
  );
}

export default Navbar;
