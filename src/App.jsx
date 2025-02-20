import React from 'react';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import TrendingPhotos from './components/TrendingPhotos'
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Cover />
      <TrendingPhotos />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;


