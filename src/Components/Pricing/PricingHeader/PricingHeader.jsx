import React, { } from 'react';
import './PricingHeader.css'; // Create this file for your custom PricingHeader styles

function PricingHeader({ selectedDuration, onSelectDuration }) {
    return (
        <div className="pricing-header">
            <h2 className="pricing-heading">Pricing</h2>
            <div className="pricing-buttons">
                <button
                    className={`pricing-button ${selectedDuration === 'monthly' ? 'active' : ''}`}
                    onClick={() => onSelectDuration('monthly')}
                >
                    Monthly
                </button>
                <button
                    className={`pricing-button ${selectedDuration === 'yearly' ? 'active' : ''}`}
                    onClick={() => onSelectDuration('yearly')}
                >
                    Yearly
                </button>
            </div>
        </div>
    );
}

export default PricingHeader;
