import PropTypes from 'prop-types';
const CurrentlyCooking = ( {moved} ) => {
    const name = moved[0].recipe_name
    const time = moved[0].preparing_time
    const calories = moved[0].calories

    return (
        <>
        <tr className='mt-5'>
            <td>{ }</td>
            <td>{name}</td>
            <td>{time} minutes</td>
            <td>{calories} calories</td>
            <td><button className="btn text-[#150B2B] rounded-3xl bg-[#0BE58A]">Currently Cooking</button></td>
        </tr>   

        </>
    );
};
CurrentlyCooking.propTypes = {
    moved: PropTypes.array.isRequired,
}
export default CurrentlyCooking;