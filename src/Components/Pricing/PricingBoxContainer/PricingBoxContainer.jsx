import React from 'react';
import './PricingBoxContainer.css'; // Create this file for your custom PricingBoxContainer styles
import PricingBox from './PricingBox';
import pricingData from '../../../assets/data/pricing';

function PricingBoxContainer({ selectedDuration }) {
    return (
        <div className="pricing-box-container">
            {/* Map through pricingData and render PricingBox components */}
            {pricingData.map((price) => (
                <PricingBox key={price.id} icon={price.icon} amount={price.amount} header={price.header} details={price.details} duration={selectedDuration} />
            ))}
        </div>
    );
}

export default PricingBoxContainer;
