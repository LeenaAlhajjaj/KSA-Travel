import React from 'react';
import './Cards.css';
import CardsItem from './CardsItem';

function Cards() {
  return (

    <div className='cards'>
      <h1>Explore The Kingdom!</h1>

      <div className='cards-container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardsItem
           src ='./images/Riyadh.jpg'
           text = "Explore the Kingdome"
           lable = 'Riyadh'
           path = '/places'
           />

           <CardsItem
            src ='./images/Rijal-Alma.jpg'
            text = "Explore the Kingdome"
            lable = 'Advanture'
            path = '/places'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
