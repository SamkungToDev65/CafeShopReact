import React from 'react';
import Navbar from './components/navBar/navBar';
import Banner from './components/Main/Banner/Banner';
import Gallery from './components/Main/Gallery/Gallery';
import Service from './components/Main/Service/service';
import './index.css';
import './App.css';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Service />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
