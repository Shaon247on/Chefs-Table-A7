import PropTypes from 'prop-types';
const Card = ({ card, handleToCook }) => {
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                                <p>{preparing_time} minutes</p>
                            </div>
                            <div className="flex gap-1 items-center font-fira text-[#282828CC]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                                </svg>

                                <p>{calories} calories</p>
                            </div>
                        </div>
                        <button onClick={() => handleToCook(card)} className="bg-[#0BE58A] text-[#150B2B] border-none w-32 lg:w-48 py-4 rounded-[30px] text-[15px] lg:text-[20px] font-semibold mb-12">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleToCook: PropTypes.func.isRequired,

}
export default Card;