import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import Middle from './components/Middle';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <Header />
      <Middle/>
      <Menu />
      <ContactInfo/>
      <Footer />
    </div>
  );
}

export default App;