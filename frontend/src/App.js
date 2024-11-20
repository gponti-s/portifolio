import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./components/AllRoutes";
import Navbar from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectPage } from "./pages/ProjectPage";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const allRoutes = [
    { name: "About", path: "/", element: <AboutPage /> },
    { name: "Articles", path: "/articles", element: <ArticlesPage /> },
    { name: "Project", path: "/project", element: <ProjectPage /> },
    { name: "Contact", path: "/contact", element: <ContactPage /> },
  ];

  return (
    <AuthProvider>
      <BrowserRouter>
      <div className="app-container">
        <Navbar
          allRoutes={allRoutes}
        />
        <div className="content-container">
          <AllRoutes allRoutes={allRoutes} />
        </div>
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
