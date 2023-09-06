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

const sections = [
  { component: HeroHeading, className: 'hero' },
  { component: Features, className: 'hero' },
  { component: Testimonials, className: 'hero' },
  { component: Pricing, className: 'hero' },
  { component: Companies, className: 'hero' },
  { component: TryItOut, className: 'hero' },
  // Add more sections as needed
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        {sections.map((section, index) => (
          <section key={index} className={section.className}>
            <div className="container">
              <section.component />
            </div>
          </section>
        ))}
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
