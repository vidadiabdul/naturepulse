import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Toaster } from "react-hot-toast";
import "./App.css";
import PublicRoutes from "./routes/PublicRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import Notfound from "./components/Notfound";

function App() {

  useEffect(() => {
    // Dynamically load the SmoothScroll script
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js";
    script.integrity = "sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco=";
    script.crossOrigin = "anonymous";
    script.onload = () => {
      // Initialize SmoothScroll after the script is loaded
      window.SmoothScroll({
        animationTime: 800,
        stepSize: 75,
        accelerationDelta: 30,
        accelerationMax: 2,
        keyboardSupport: true,
        arrowScroll: 50,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        touchpadSupport: true,
      });
    };

    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
