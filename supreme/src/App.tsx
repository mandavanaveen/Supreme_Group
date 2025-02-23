import React from 'react';
import Header from './Components/Header';
import Firstpage from './Components/Firstpage';
import VehicleSelector from './Components/VehicleSelector';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Firstpage />
      <VehicleSelector />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
