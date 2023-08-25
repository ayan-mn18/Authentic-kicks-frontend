// src/components/Hero/HeroImage.jsx
import React from 'react';
import './HeroImage.css'; // Create this file for your custom HeroImage styles
import heroImage from '../../../assets/hero_header.jpg';
import BackgroundLayer from '../BackgroundLayer/BackgroundLayer';

function HeroImage() {
    return (
        <div className="hero-image">
            <img src={heroImage} className="image" alt="Hero Header" />
            <BackgroundLayer />
        </div>
    );
}

export default HeroImage;
