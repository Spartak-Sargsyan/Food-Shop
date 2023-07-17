import { useParams, useNavigate } from "react-router-dom";
import { getFilterCatagory } from "../../services/services";
import { useEffect, useState } from "react";
import Preloader from "../../components/Preloader/Preloader";
import MealList from "../../components/MealList/MealList";

const Category = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getFilterCatagory(name).then((res) => setMeals(res.meals));
    }, [name]);
    return (
        <>
            <button className="btn" onClick={goBack}>
                Go Back
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
};

export default Category;
