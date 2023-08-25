import React from 'react';
import './App.css';
import './variables.css';
import Navbar from './Components/Navbar/Navbar';
import HeroHeading from './Components/Hero/HeroHeader';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <main>
        <section className="hero">
          <div className="container">
            <HeroHeading />
            {/* Hero content */}
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
