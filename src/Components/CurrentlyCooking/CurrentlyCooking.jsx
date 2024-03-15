import PropTypes from 'prop-types';
const CurrentlyCooking = ({ cook }) => {
    const { recipe_name, preparing_time, calories } = cook

    return (
        <>
        <tr className='mt-5'>
            <td>{ }</td>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
        </tr>
        <div>
            
        </div>
        </>
    );
};
CurrentlyCooking.propTypes = {
    cook: PropTypes.object.isRequired,
}
export default CurrentlyCooking;