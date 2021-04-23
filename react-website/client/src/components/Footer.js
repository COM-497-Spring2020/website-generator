import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                   Get in contact with us! 
                </p>
                <p className='footer-subscription-text'>
                    If you are interested in our services or if you want more information about
                    what we have to offer to you, feel free to contact us by clicking on the link 
                    below and leave us your questions to answer.
                </p>
                <div className="input-areas">
                        <Link className="link-button" to='/contact'><button className="buttonStyle">Contact Us</button></Link>
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
                        <Link to='/contact'>Support</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
