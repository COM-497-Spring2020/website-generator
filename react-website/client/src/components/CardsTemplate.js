import React from 'react'
import CardItem from './CardItem'
import './CardsTemplate.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out a sample of our collection of templates</h1>
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
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='images/TestTemplateImg.jpg'
                            text="Enjoy our italian style restaurant website"
                            label='Italian'
                            path='/templates'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
