import React from 'react';
import './App.css';
import './variables.css';
import Navbar from './Components/Navbar/Navbar';
import HeroHeading from './Components/Hero/HeroHeader';
import Features from './Components/Features/Features';
import Testimonials from './Components/Testimonials/Testimonials';
import Pricing from './Components/Pricing/Pricing';
import Companies from './Components/Companies/Companies';
import TryItOut from './Components/TryItOut/TryItOut';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <main className='main'>
        <section className="hero">
          <div className="container">
            <HeroHeading />
          </div>
        </section>
        <section className="hero">
          <div className="container">
            <Features />
          </div>
        </section>
        <section className="hero">
          <div className="container">
            <Testimonials />
          </div>
        </section>
        <section className="hero">
          <div className="container">
            <Pricing />
          </div>
        </section>
        <section className="hero">
          <div className="container">
            <Companies />
          </div>
        </section>
        <section className="hero">
          <div className="container">
            <TryItOut />
          </div>
        </section>
        {/* Other sections */}
      </main>
      <footer className="footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
