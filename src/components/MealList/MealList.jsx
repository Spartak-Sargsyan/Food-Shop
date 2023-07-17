import Meal from "../Meal/Meal";

const MealList = ({ meals = [] }) => {
    return (
        <div className="list">
            {meals.map((item) => {
                return <Meal key={item.idMeal} {...item} />;
            })}
        </div>
    );
};

export default MealList;
