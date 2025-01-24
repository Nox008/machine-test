import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import Middle from './components/Middle';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <Header />
      <Middle/>
      <Menu />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;