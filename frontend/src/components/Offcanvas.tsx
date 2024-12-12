import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import { ALL_ROUTES_PUBLIC } from "../constants/routes";

interface Route {
  name: string;
  path: string;
}

function Offcanvas() {
  const { appTitle } = useAuth();
  const [selectedItem, setSelectedItem] = useState<string>("");
  const navigate = useNavigate();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);


  useEffect(() => {
    const initialSelectedItem = ALL_ROUTES_PUBLIC.find(route => window.location.pathname === route.path)?.name || "";
    setSelectedItem(initialSelectedItem);
  }, [ALL_ROUTES_PUBLIC]);

  function handleClickItem(item: string) {
    const route = ALL_ROUTES_PUBLIC.find(route => route.name === item);
    if (route) {
      navigate(route.path);
      setSelectedItem(item);
      closeButtonRef.current?.click();
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
        tabIndex={-1}
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
          <ul className="list-group list-group-flush list-group-item-dark rounded-3">
            {ALL_ROUTES_PUBLIC.map(route => (
              <li
                key={route.path}
                className={`list-group-item ${selectedItem === route.name ? 'active' : 'list-group-item-action'}`}
                onClick={() => handleClickItem(route.name)}
              >
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
