import React from 'react';
import './App.css';
import './variables.css';
import Navbar from './Components/Navbar/Navbar';
import HeroHeading from './Components/Hero/HeroHeader';
import Features from './Components/Features/Features';
import Testimonials from './Components/Testimonials/Testimonials';
import Pricing from './Components/Pricing/Pricing';

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
        {/* Other sections */}
      </main>
      <footer className="footer">
        <div className="container">
          {/* Footer content */}
        </div>
      </footer>
    </div>
  );
}

export default App;
