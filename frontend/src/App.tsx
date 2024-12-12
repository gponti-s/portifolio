import React, { useEffect } from "react";
import { AuthProvider } from "./store/AuthContext";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Viewport from "./components/Viewport";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  useEffect(() => {
    document.title = process.env.REACT_APP_TITLE || "Guilherme Seletti";
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Viewport />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
