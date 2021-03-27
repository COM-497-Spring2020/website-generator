import React from 'react';
import './TemplateAlbum.css';
import CardItem from './CardItem';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function TemplateAlbum() {
    return (
        <div className="cards">
            <h1>Check out our collection of templates.</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='images/TestTemplateImg.jpg'
                            text="Enjoy our italian style restaurant website"
                            label='Italian'
                            path='/templates'
                        />
                        <CardItem 
                            src='images/TestTemplateImg.jpg'
                            text="Enjoy our italian style restaurant website"
                            label='Italian'
                            path='/templates'
                        />
                        <CardItem 
                            src='images/TestTemplateImg.jpg'
                            text="Enjoy our italian style restaurant website"
                            label='Italian'
                            path='/templates'
                        />
                        <CardItem 
                            src='images/TestTemplateImg.jpg'
                            text="Enjoy our italian style restaurant website"
                            label='Italian'
                            path='/templates'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='images/TestTemplateImg.jpg'
                            text="Enjoy our italian style restaurant website"
                            label='Italian'
                            path='/templates'
                        />
                        <CardItem 
                            src='images/TestTemplateImg.jpg'
                            text="Enjoy our italian style restaurant website"
                            label='Italian'
                            path='/templates'
                        />
                        <CardItem 
                            src='images/TestTemplateImg.jpg'
                            text="Enjoy our italian style restaurant website"
                            label='Italian'
                            path='/templates'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='images/TestTemplateImg.jpg'
                            text="Enjoy our italian style restaurant website"
                            label='Italian'
                            path='/templates'
                        />
                        <CardItem 
                            src='images/TestTemplateImg.jpg'
                            text="Enjoy our italian style restaurant website"
                            label='Italian'
                            path='/templates'
                        />
                    </ul>
                </div>
                <Button buttonStyle='btn--outline'><Link className="link-button" to='/Customize'>Customize Your Own</Link></Button>
            </div>
        </div>
    )
}

export default TemplateAlbum
