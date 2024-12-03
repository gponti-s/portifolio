import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import { Link } from "react-router-dom";

function Offcanvas() {
  const { appTitle, appSubTitle } = useAuth();
  const [selectedItem, setSelectedItem] = useState("");
  const navigate = useNavigate();
  const closeButtonRef = useRef(null);

  // Define your routes directly in the component
  const routes = [
    { name: "About", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
    { name: "Reading", path: "/reading" },
  ];

  useEffect(() => {
    const activeRoute = routes.find(
      (route) => window.location.pathname === route.path
    );
    const initialSelectedItem = activeRoute ? activeRoute.name : "";
    setSelectedItem(initialSelectedItem);
  }, []);

  function handleClickItem(item) {
    const route = routes.find((route) => route.name === item);
    if (route) {
      navigate(route.path);
      setSelectedItem(item); // Update selected item
      if (closeButtonRef.current) {
        closeButtonRef.current.click();
      }
    }
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="white"
        className="bi bi-list me-2"
        viewBox="0 0 16 16"
        cursor="pointer"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            {appTitle}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            ref={closeButtonRef}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul  className="list-group list-group-flush list-group-item-dark">
            {routes.map((route) => (
              <li  key={route.path} className={`list-group-item  ${window.location.pathname === route.path ? 'active' : 'list-group-item-action'}`} onClick={() => handleClickItem(route.name)}>
                {route.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Offcanvas;
