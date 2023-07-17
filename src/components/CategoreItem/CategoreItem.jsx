import { Routing } from "../../constant/RouteConstant";
import "./Item.css";
import { Link, u } from "react-router-dom";

const CategoreItem = ({
    // idCategory,
    strCategory,
    strCategoryThumb,
    strCategoryDescription,
}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link to={Routing.category + "/" + strCategory} className="btn">
                    Watch category
                </Link>
            </div>
        </div>
    );
};

export default CategoreItem;
