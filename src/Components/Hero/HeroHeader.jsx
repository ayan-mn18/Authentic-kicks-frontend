// src/components/Hero/HeroHeading.jsx
import React from 'react';
import './HeroHeading.css'; // Create this file for your custom HeroHeading styles
import GetStartedButton from '../Atoms/Get Started/GetStartedButton';
import HeroImage from '../Atoms/HeroImage/HeroImage';
import Ellipse_big from '../Atoms/BackgroundLayer/Ellipse/Ellipse_big';
import Ellipse_small from '../Atoms/BackgroundLayer/Ellipse/Ellipse_small';
import Ellipse_mid from '../Atoms/BackgroundLayer/Ellipse/Ellipse_mid';

function HeroHeading() {
    return (
        <div className="hero-heading">
            <div className="first-line">Make and Craft your own</div>
            <div className="second-line">
                <span className="animated-text">Custom Tees</span>
            </div>
            <div className="description">
                Transform your wardrobe with custom-designed tees that reflect your personality and passions. Unleash your creativity and craft unique, wearable art that makes a statement.
            </div>
            <GetStartedButton />
            <HeroImage />
            <Ellipse_big />
            <Ellipse_small />
            <Ellipse_mid />
        </div>
    );
}

export default HeroHeading;
