import PropTypes from 'prop-types';
const Card = ({card,handleToCook}) => {
    const { recipe_name, short_description, ingredients, preparing_time, calories, recipe_image } = card
    return (
        <div>
            <div className="rounded-2xl w-[320px] bg-base-100 shadow-xl border-[#28282833] border-2 mx-6 my-5">
                <figure className="p-6">
                    <img className="rounded-2xl" src={recipe_image} alt="No Image">
                    </img>
                </figure>
                <div className=" mx-6">
                    <h2 className="card-title mb-4">{recipe_name}</h2>
                    <p className="mb-10">{short_description}</p>

                    <div>
                        <h4 className="text-lg font-medium">Ingredients: {ingredients.length}</h4>
                        <ul className="ml-6 list-disc font-fira text-[#878787] mb-8">
                           {
                            ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                           } 
                        </ul>

                        <div className="flex gap-4 mb-6">
                            <div className="flex gap-1 items-center font-fira text-[#282828CC]">
                                <img src="src/assets/image/Clock.svg" alt=""></img>
                                <p>{preparing_time} minutes</p>
                            </div>
                            <div className="flex gap-1 items-center font-fira text-[#282828CC]">
                                <img src="src/assets/image/Fire.svg" alt=""></img>
                                <p>{calories} calories</p>
                            </div>
                        </div>
                        <button onClick={()=>handleToCook(card)} className="bg-[#0BE58A] text-[#150B2B] border-none w-32 lg:w-48 py-4 rounded-[30px] text-[15px] lg:text-[20px] font-semibold mb-12">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes= {
    card: PropTypes.object.isRequired,
    handleToCook: PropTypes.func.isRequired,
    
}
export default Card;