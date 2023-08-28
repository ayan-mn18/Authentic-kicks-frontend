import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard'; // Replace with your actual component
import './Slider.css'; // Create this file for your custom TestimonialSlider styles

const Slider = ({ testimonials }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // const handlePrev = () => {
    //     setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    // };

    // const handleNext = () => {
    //     setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    // };

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment activeIndex
            setActiveIndex((prevIndex) => (prevIndex + 1) % (testimonials.length + 1));
        }, 5000); // Adjust the interval duration (in milliseconds)

        return () => {
            clearInterval(interval); // Clear the interval on unmount
        };
    }, [testimonials]);
    return (
        <div className="testimonial-slider">
            <div className="slider-container" style={{ transform: `translateX(-${activeIndex * 10}%)` }}>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                        isActive={index === activeIndex}
                    />
                ))}
            </div>
            <div className="slider-dots">
                {testimonials.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
