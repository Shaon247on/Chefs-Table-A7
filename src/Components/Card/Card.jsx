const Card = ({card}) => {
    console.log(card)
    const { recipe_id, recipe_name, short_description, ingredients, preparing_time, calories, recipe_image } = card
    console.log(recipe_image)
    return (
        <div>
            <div className="rounded-2xl w-96 bg-base-100 shadow-xl border-[#28282833] border-2">
                <figure className="p-6">
                    <img className="rounded-2xl" src={card.recipe_image} alt="No Image">
                    </img>
                </figure>
                <div className=" mx-6">
                    <h2 className="card-title mb-4">Spaghetti Bolognese</h2>
                    <p className="mb-10">classic Italian pasta dish with savory meat sauce.</p>

                    <div>
                        <h4 className="text-lg font-medium">Ingredients: 6</h4>
                        <ul className="ml-6 list-disc font-fira text-[#878787] mb-8">
                            <li>500g ground beef</li>
                            <li>1 onion, chopped</li>
                            <li>2 cloves garlic, minced</li>
                        </ul>

                        <div className="flex gap-4 mb-6">
                            <div className="flex gap-1 items-center font-fira text-[#282828CC]">
                                <img src="src/assets/image/Clock.svg" alt=""></img>
                                <p>30 minutes</p>
                            </div>
                            <div className="flex gap-1 items-center font-fira text-[#282828CC]">
                                <img src="src/assets/image/Fire.svg" alt=""></img>
                                <p>600 calories</p>
                            </div>
                        </div>
                        <button
                            className="bg-[#0BE58A] text-[#150B2B] border-none w-28 lg:w-48 py-4 rounded-[30px] text-base lg:text-[20px] font-semibold">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;