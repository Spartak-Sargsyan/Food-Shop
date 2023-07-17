import { useParams, useNavigate } from "react-router-dom";
import { getMealByID } from "../../services/services";
import { useEffect, useState } from "react";
import Preloader from "../../components/Preloader/Preloader";
import "./Recipe.css";

const Recipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getMealByID(id).then((res) => setRecipe(res.meals[0]));
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipy">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                    <p>{recipe.strInstructions}</p>

                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((item) => {
                                if (
                                    item.includes("Ingredient") &&
                                    recipe[item]
                                ) {
                                    return (
                                        <tr key={item}>
                                            <td>{recipe[item]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${item.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>

                    {recipe.strYoutube ? (
                        <div className="row">
                            <h5 className="video">Video Recipe</h5>
                            <iframe
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                                title={id}
                                allowFullScreen
                            />
                        </div>
                    ) : null}
                </div>
            )}
            <button className="btn" onClick={goBack}>
                Go Back
            </button>
        </>
    );
};

export default Recipe;
