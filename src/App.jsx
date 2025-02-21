import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import TrendingPhotos from "./components/TrendingPhotos";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Login from "./components/Login"; // Import Login component
import SignUp from "./components/Signup"
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Cover />
              <TrendingPhotos />
              <Gallery />
            </>
          } />
          <Route path="/login" element={<Login />} /> {/* Login Route */}
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
