import React from 'react';
import './Testimonials.css'; // Import the CSS file for Testimonials
import testimonialsData from '../../assets/data/testimonials';
import Slider from './TestimonialsCardSlider/Slider';

function Testimonials() {
    return (
        <div className="testimonials">
            <h2 className="testimonials-heading">Testimonials</h2>
            <div className="testimonial-silder">
                <Slider testimonials={testimonialsData} />
            </div>

        </div>
    );
}

export default Testimonials;
