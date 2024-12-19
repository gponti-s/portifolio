import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "./Offcanvas";
import { loginUser } from "../services/auth";
import LoginModal from "./LoginModal";
import { useAuth } from "../store/AuthContext";



export const Navbar: React.FC = () => {
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
      setIsLoggedIn(true);
      setShowModal(false);
      const userLoggedString = localStorage.getItem("userLogged");
      const userLogged = userLoggedString ? JSON.parse(userLoggedString) : null;
      console.log(userLogged);
    } else {
      alert("Login error");
    }
  }
  
  async function connectWallet() {
    await checkWalletConnection();
    if(isWalletConnectedSwitch){
      alert("Wallet already connected")
    } else {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setWalletConnectedSwitch(accounts.length > 0);
          console.log("Wallet connected");
        } catch (error) {
          console.error("Error connecting to wallet:", error);
          alert("Failed to connect wallet. Please try again.");
        }
      } else {
        alert("Please install MetaMask!");
      }
    }
  }
  
  const checkWalletConnection = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      setWalletConnectedSwitch(accounts.length > 0);
    }
  };
  
  useEffect(() => {
    checkWalletConnection();
  }, []);
  
  return (
    <nav
      className={`navbar fixed-top ${isScrolled ? "bg-dark" : "bg-transparent"}`}
      data-bs-theme="dark"
      style={{ opacity: '0.97' }}
    >
      <div className="container-fluid mx-3">
        <Offcanvas></Offcanvas>

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

        <a
          className="nav-link rounded-pill p-2 ms-2"
          onClick={() => setShowModal(true)}
          style={{ color: "white", cursor: "pointer"}}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </a>
        <div>
          <a 
            className="nav-link rounded-circle mx-2" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
            style={{ 
              cursor: 'pointer', 
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              
            }}
          >
            <i className="bi bi-three-dots-vertical text-light hover-icon-secondary"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="/signin">Sign in</a></li>
            <li><a className="dropdown-item" href="/error">error</a></li>
            <li><a className="dropdown-item" href="/notfound">not found page</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Separated link</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <div className="dropdown-item form-check form-switch d-flex  ">
                <span className="me-2 text-body-dark">
                  {isWalletConnectedSwitch ? "Wallet Connected" : "Connect Wallet"}
                </span>
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  style={{ margin: "auto", cursor:"pointer"}}
                  onClick={connectWallet}
                  checked={isWalletConnectedSwitch}
                />
          </div>
            </li>
          </ul>

        </div>
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
