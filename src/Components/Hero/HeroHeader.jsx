// src/components/Hero/HeroHeading.jsx
import React from 'react';
import './HeroHeading.css'; // Create this file for your custom HeroHeading styles
import GetStartedButton from '../Atoms/Get Started/GetStartedButton';
import HeroImage from '../Atoms/HeroImage/HeroImage';
import EllipseBig from '../Atoms/BackgroundLayer/Ellipse/EllipseBig';
import EllipseSmall from '../Atoms/BackgroundLayer/Ellipse/EllipseSmall';
import EllipseMid from '../Atoms/BackgroundLayer/Ellipse/EllipseMid';

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
            <EllipseBig />
            <EllipseSmall />
            <EllipseMid />
        </div>
    );
}

export default HeroHeading;
