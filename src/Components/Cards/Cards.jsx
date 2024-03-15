import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({handleToCook}) => {
    const [cards, setCards] =useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setCards(data))
    },[])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 col-span-full lg:col-span-4 items-stretch">
            {
                cards.map(card => <Card 
                key={card.recipe_id}
                card={card}
                handleToCook={handleToCook}
                ></Card>)
            }
        </div>
    );
};

Cards.propTypes ={
    handleToCook: PropTypes.func.isRequired
}
export default Cards;