import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                   Add text for the footer here! 
                </p>
                <p className='footer-subscription-text'>
                    Add more text here for the footer!
                </p>
                <div className="input-areas">
                    <form>
                        <Button buttonStyle='btn--outline'><Link className="link-button" to='/contact'>Contact Us</Link></Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2>About Us</h2>
                        <Link to='/'>How we works</Link>
                        <Link to='/'>What is our goal?</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2>Contact Us</h2>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
