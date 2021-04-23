import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import App from '../send/restaurant/src/App'

function Customize() {
    return (
        <>
           <h1 className='customize'>Customize a Template</h1>
           <App />
           <Footer />
        </>
    )
}

export default Customize
