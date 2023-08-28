import React from 'react'
import './Features.css';
import FeatureText from './FeatureText/FeatureText';
import FeatureBox from './FeatureBox/FeatureBox';
import featureBoxData from '../../assets/data/featureBox';

const Features = () => {
    return (
        <div className="features">
            <FeatureText />
            <div className="Feature-box" >
                {featureBoxData.map((feature) =>
                    <FeatureBox
                        key={feature.id}
                        icon={feature.icon}
                        heading={feature.heading}
                        description={feature.description}
                    />
                )}
            </div>

        </div>
    )
}

export default Features;
