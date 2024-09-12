import React from 'react';
import './About.css'; // Importing external CSS

export default function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Us</h1>
            </div>
            <div className="about-content">
                <p>
                    Welcome to our company! We are dedicated to delivering high-quality services to our clients.
                    Our team consists of highly skilled professionals with expertise in various fields, ensuring
                    that every project is completed with the utmost precision and attention to detail.
                </p>
                <p>
                    Our mission is to create innovative solutions that help businesses grow and succeed in today's
                    competitive marketplace. We believe in continuous improvement, collaboration, and a commitment
                    to excellence.
                </p>
                <p>
                    Whether you're looking for web development, software solutions, or consulting services,
                    we're here to help you every step of the way. Let's build something great together!
                </p>
            </div>
            <div className="about-footer">
                <button className="cta-button">Learn More</button>
            </div>
        </div>
    );
}
