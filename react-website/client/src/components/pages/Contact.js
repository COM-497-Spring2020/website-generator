import React from 'react';
import '../../App.css';
import ContactForm from '../ContactForm';
import Footer from '../Footer';

export default function Contact() {
    return(
        <>
            <h1 className='contact'>CONTACT US</h1>
            <ContactForm />
            <Footer />
        </> 
    )
}
