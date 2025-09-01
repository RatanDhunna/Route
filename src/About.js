import React from 'react';

const About = () => (
    <div style={{ padding: '2rem' }}>
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                We are passionate about building beautiful, responsive web experiences.<br />
                Our team is dedicated to delivering modern design and seamless navigation.<br />
                <br />
                <strong>Contact:</strong> info@example.com
            </p>
            <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
                alt="Team"
                style={{ width: '100%', maxWidth: '400px', borderRadius: '12px', margin: '24px auto' }}
            />
        </div>
    </div>
);

export default About;