import { Link } from "react-router-dom";
import { Routing } from "../../constant/RouteConstant";

const Meal = ({ strMeal, strMealThumb, idMeal }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={Routing.meal + "/" + idMeal} className="btn">
                    Watch recipe
                </Link>
            </div>
        </div>
    );
};

export default Meal;
