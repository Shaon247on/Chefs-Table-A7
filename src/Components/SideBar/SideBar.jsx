import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import WantToEat from "../WantToEat/WantToEat";
import PropTypes from 'prop-types';
const SideBar = ({ toCook, count,handleRemove, remove}) => {
    console.log(remove)
    return (
        <div className="mx-4 lg:mx-0 col-span-full lg:col-span-3 border-2 border-green-400 text-center pt-8">
            <div>
                <h1 className="text-2xl font-semibold">want to cook: {count}</h1>
                <div className="flex justify-between items-center">
                    <table className="w-full border-collapse text-[#282828B3]">
                        <thead className="w-80 font-medium">
                            <tr className="text-start">
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {toCook.map(cook => <WantToEat cook={cook} key={cook.recipe_id} count={count} handleRemove={handleRemove}></WantToEat>)}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-semibold">want to cook: {count}</h1>
                <div className="flex justify-between items-center">
                    <table className="w-full border-collapse text-[#282828B3]">
                        <thead className="w-80 font-medium">
                            <tr className="text-start">
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {remove.map(cook => <CurrentlyCooking cook={cook} key={cook.recipe_id} count={count} ></CurrentlyCooking>)} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
SideBar.propTypes = {
    toCook: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    handleRemove: PropTypes.func.isRequired,
    remove: PropTypes.array.isRequired,


}
export default SideBar;