import React, { useState } from 'react';
import './Pricing.css'; // Create this file for your custom Pricing styles
import PricingHeader from './PricingHeader/PricingHeader';
import PricingBoxContainer from './PricingBoxContainer/PricingBoxContainer';

function Pricing() {
    const [selectedDuration, setSelectedDuration] = useState('monthly');

    const handleSelectDuration = (duration) => {
        setSelectedDuration(duration);
    };

    return (
        <div className="pricing-section">
            <PricingHeader
                selectedDuration={selectedDuration}
                onSelectDuration={handleSelectDuration}
            />
            <PricingBoxContainer selectedDuration={selectedDuration} />
        </div>
    );
}

export default Pricing;
