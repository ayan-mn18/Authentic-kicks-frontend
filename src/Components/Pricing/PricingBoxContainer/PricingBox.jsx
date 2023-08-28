import React from 'react';
import './PricingBox.css'; // Create this file for your custom PricingBox styles
import Tick from '../../../assets/tick.png';

function PricingBox({ icon, header, details, amount, duration }) {

    const generateDuration = (duration) => {
        return duration === 'monthly' ? "/mo" : "/yr";
    }

    const generateAmount = (amount, duration) => {
        return duration === 'monthly' ? amount[0] : amount[1];
    }
    return (
        <div className="pricing-box">
            <div className="pricing-icon">
                <img src={icon} alt="Pricing Icon" />
            </div>
            <h3 className="pricing-header">{header}</h3>
            <div className="divider"></div>
            <div className="pricing-details">
                {details.map((detail, index) => (
                    <div className="detail" key={index}>
                        <span className="detail-icon">
                            <img src={Tick} alt='tick' />
                        </span>
                        {detail}
                    </div>
                ))}
            </div>
            <div className="divider"></div>
            <div className="amount-and-signup">
                <div className="amount">
                    <span className="amount-value">{generateAmount(amount, duration)}</span>
                    <span className="duration">{generateDuration(duration)}</span>
                </div>
                <button className="signup-button">Signup Now</button>
            </div>
        </div>
    );
}

export default PricingBox;
