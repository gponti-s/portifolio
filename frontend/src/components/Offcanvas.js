import ListGroup from "./ListGroup";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Offcanvas({ toggleMenu, allRoutes }) {
  const [selectedItem, setSelectedItem] = useState("");
  const navigate = useNavigate();
  const routeNames = allRoutes.map((route) => route.name);
  let menuRef = useRef();

  useEffect(() => {
    const activeRoute = allRoutes.find(
      (route) => window.location.pathname === route.path
    );
    const initialSelectedItem = activeRoute ? activeRoute.name : "";
    setSelectedItem(initialSelectedItem);
  }, [allRoutes]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && event && !menuRef.current.contains(event.target)) {
        toggleMenu();
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  function handleClickItem(item) {
    const route = allRoutes.find((route) => route.name === item);
    if (route) {
      navigate(route.path);
    }
    toggleMenu();
    setSelectedItem(item);
  }
  
  return (
    <div
    className="offcanvas offcanvas-start show text-bg-dark"
    tabindex="-1"
    id="offcanvasDark"
    aria-labelledby="offcanvasDarkLabel"
    ref={menuRef}
    >
      <div className="offcanvas-header">
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvasDark"
          aria-label="Close"
          onClick={toggleMenu}
        ></button>
      </div>
      <div className="offcanvas-body">
        <ListGroup
          title={"Guilherme Seletti"}
          subtitle={"Portifolio"}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          items={routeNames}
          handleClickItem={handleClickItem}
        />
        {/* <p>Place offcanvas content here.</p> */}
      </div>
    </div>
  );
}

export default Offcanvas;
