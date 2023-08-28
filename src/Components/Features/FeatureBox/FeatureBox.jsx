import React from 'react';
import './FeatureBox.css';

const FeatureBox = ({ icon, heading, description }) => {
    return (
        <div className="feature-box">
            <div className="icon-box">
                <img src={icon} alt="Icon" className="icon" />
            </div>
            <h3 className="box-heading">{heading}</h3>
            <p className="box-description">
                {description}
            </p>
        </div>
    );
}

export default FeatureBox;
