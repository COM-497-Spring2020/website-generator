import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Restaurant Websites</h1>
            <p>Always wanted the perfect website for your restaurant?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Sign Up Now</Button>
            </div>
        </div>
    )
}

export default HeroSection
