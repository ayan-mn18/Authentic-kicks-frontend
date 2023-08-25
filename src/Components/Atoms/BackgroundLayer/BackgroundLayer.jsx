// src/components/Hero/BackgroundLayer.jsx
import React from 'react';
import './BackgroundLayer.css'; // Create this file for your custom BackgroundLayer styles
import Subtract from '../../../assets/Subtract.png';

function BackgroundLayer() {
    return (
        <div className="background-layer">
            <img className='subtract' src={Subtract} alt='Subtract' />
        </div>
    );
}

export default BackgroundLayer;
