import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectPage } from "./pages/ProjectPage";
import { AuthProvider } from "./store/AuthContext";
import { ReadingPage } from "./pages/ReadingPage";
import Viewport from "./components/Viewport";
import { Footer } from "./components/Footer";

export interface allRoutesType {
  name: string;
  path: string;
  element: React.ReactNode;
}

const App: React.FC = () => {
  useEffect(() => {
    document.title = process.env.REACT_APP_TITLE || "Guilherme Seletti";
  }, []);

  const allRoutes = [
    { name: "About", path: "/", element: <AboutPage /> },
    { name: "Articles", path: "/articles", element: <ArticlesPage /> },
    { name: "Project", path: "/project", element: <ProjectPage /> },
    { name: "Contact", path: "/contact", element: <ContactPage /> },
    { name: "Reading", path: "/reading", element: <ReadingPage /> },
  ];

  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar/>
          <Viewport>
            <Routes>
              <Route path="/" element={<AboutPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/project" element={<ProjectPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/reading" element={<ReadingPage />} />
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
            {/* <AllRoutes allRoutes={allRoutes} /> */}
          </Viewport>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
