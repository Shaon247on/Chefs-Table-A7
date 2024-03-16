import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import WantToEat from "../WantToEat/WantToEat";
import PropTypes from 'prop-types';
const SideBar = ({ toCook,handleRemove, remove}) => {
    const times = remove.map(time=> time[0].preparing_time)
    const sum =times.reduce((total, num) =>total + num, 0)
    const calories = remove.map(time=> time[0].calories)
    const math =calories.reduce((total, num) =>total + num, 0)
    return (
        <div className="mx-4 lg:mx-0 col-span-full lg:col-span-3  text-center pt-8">
            <div className=" pb-5 space-y-4">
                <h1 className="text-2xl font-semibold">want to cook: {toCook.length}</h1>
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
                            {toCook.map((cook, index) => <WantToEat cook={cook} key={cook.recipe_id} handleRemove={handleRemove} index={index}></WantToEat>)}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="border-b-2 border-b-black pb-5 space-y-4">
                <h1 className="text-2xl font-semibold">want to cook: {remove.length}</h1>
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
                            {remove.map((moved, index) => <CurrentlyCooking moved={moved} key={moved.recipe_id} index={index} ></CurrentlyCooking>)}
                        </tbody>
                    </table>
                </div>
            </div>
            <hr />            
            <div className="text-[#282828CC]">
                <h2>Total Time= {sum} minutes</h2>
                <h2>Total Calories= {math} calories</h2>
            </div>
        </div>
    );
};
SideBar.propTypes = {
    toCook: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired,
    remove: PropTypes.array.isRequired,


}
export default SideBar;