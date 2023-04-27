import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these delicious recipes!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/pexels-ash-376464.jpg').default}
              text='Butter Chicken'
              label='For You'
              path='/Register'
            />
            <CardItem
              src={require("../images/pexels-kristina-paukshtite-1146760.jpg").default}
              text='Chicken pasta'
              label='Recommended'
              path='/Register'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require("../images/pexels-steve-3789885.jpg").default}
              text='Chicken Biriyani'
              label='New Upload'
              path='/Register'
            />
            <CardItem
              src={require("../images/pexels-anna-tukhfatullina-food-photographerstylist-2638026.jpg").default}
              text='Chilli Chicken'
              label='For You'
              path='/Register'
            />
            <CardItem
              src={require("../images/pexels-jan-n-g-u-y-e-n-🍁-699953.jpg").default}
              text='Pizza'
              label='Trending'
              path='/Register'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards; 

/*import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={ require("../images/pexels-ash-376464.jpg").default}
              text="Explore img the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/"
            /> 
            <CardItem
              src={require("../images/pexels-kristina-paukshtite-1146760.jpg").default}
              text="Travel through the Islands of Ba34li in a Private Cruise"
              label="Luxury"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/pexels-steve-3789885.jpg").default}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/"
            />
            <CardItem
              src={require("../images/pexels-anna-tukhfatullina-food-photographerstylist-2638026.jpg").default}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/"
            />
            <CardItem
              src={require("../images/pexels-jan-n-g-u-y-e-n-🍁-699953.jpg").default}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
*/
