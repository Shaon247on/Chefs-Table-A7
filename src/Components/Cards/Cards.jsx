import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] =useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setCards(data))
    },[])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {
                cards.map(card => <Card 
                key={card.recipe_id}
                card={card}
                ></Card>)
            }
        </div>
    );
};

export default Cards;