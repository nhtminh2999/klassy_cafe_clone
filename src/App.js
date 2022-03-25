import 'antd/dist/antd.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import AboutUs from './components/about_us/AboutUs';
import MenuSection from './components/menu_section/MenuSection';
import ChefSection from './components/chef_section/ChefSection';
import ContactSection from './components/contact_section/ContactSection';
import FeatureSection from './components/feature_section/FeatureSection';
import Footer from './components/footer/Footer';
import Preloader from './components/preloader/Preloader';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <Router>
      {loaded === false
        ? <Preloader />
        : <>
          <Header />
          <Hero />
          <AboutUs />
          <MenuSection />
          <ChefSection />
          <ContactSection />
          <FeatureSection />
          <Footer />
        </>
      }
    </Router>
  );
}

export default App;
