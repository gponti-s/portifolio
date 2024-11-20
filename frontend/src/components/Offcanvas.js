import ListGroup from "./ListGroup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Offcanvas({ allRoutes }) {
  const {appTitle, appSubTitle} = useAuth();
  const [selectedItem, setSelectedItem] = useState("");
  const navigate = useNavigate();
  const routeNames = allRoutes.map((route) => route.name);

  useEffect(() => {
    const activeRoute = allRoutes.find(
      (route) => window.location.pathname === route.path
    );
    const initialSelectedItem = activeRoute ? activeRoute.name : "";
    setSelectedItem(initialSelectedItem);
  }, [allRoutes]);


  function handleClickItem(item) {
    const route = allRoutes.find((route) => route.name === item);
    if (route) {
      navigate(route.path);
    }
    setSelectedItem(item);
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
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>

      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            logo
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ListGroup
            title={appTitle}
            subtitle={appSubTitle}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            items={routeNames}
            handleClickItem={handleClickItem}
          />
        </div>
      </div>
    </>
  );
}

export default Offcanvas;
