import React from 'react';
import './TestimonialCard.css'; // Import the CSS file for TestimonialCard
import Star from "../../../assets/star.png";

function TestimonialCard({ testimonial }) {
    return (
        <div className="testimonial-card">
            <div className="testimonial-desc">
                {testimonial.description}
            </div>
            <hr className="divider" />
            <div className="testimonial-user-and-ratings">
                <div className="user-info">
                    <div className="user-info-img">
                        <img src={testimonial.userImage} alt="User" />
                    </div>
                    <div className="user-info-text">
                        <div className="user-name">
                            {testimonial.userName}
                        </div>
                        <div className="user-background">
                            {testimonial.userBackground}
                        </div>
                    </div>
                </div>
                <div className="ratings">
                    {Array.from({ length: testimonial.rating }, (_, index) => (
                        <img key={index} src={Star} alt={`Star ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;
