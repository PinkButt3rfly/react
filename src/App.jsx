import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";  // ❌ Removed BrowserRouter
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import TrendingPhotos from "./components/TrendingPhotos";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Pass authentication state to Navbar */}
      <Navbar userAuthenticated={userAuthenticated} setUserAuthenticated={setUserAuthenticated} />

      <Routes>
        <Route path="/" element={
          <>
            <Cover />
            <TrendingPhotos />
            <Gallery />
          </>
        } />
        <Route path="/login" element={<Login setUserAuthenticated={setUserAuthenticated} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route 
          path="/dashboard" 
          element={userAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
