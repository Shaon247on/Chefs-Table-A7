import PropTypes from 'prop-types';
const WantToEat = ({ cook, handleRemove, index}) => {
    const { recipe_name, preparing_time, calories, recipe_id } = cook
    
    return (
        <tr className='mt-5'>
            <td>{index+1}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
            <td><button className="btn text-[#150B2B] rounded-3xl bg-[#0BE58A]" onClick={() => handleRemove(recipe_id)}>Preparing</button></td>
        </tr>
        
    );
};
WantToEat.propTypes= {
    cook: PropTypes.object.isRequired,    
    handleRemove: PropTypes.func.isRequired,    
    index: PropTypes.number.isRequired,    
}
export default WantToEat;