import "./List.css";
import CategoreItem from "../CategoreItem/CategoreItem";

const CategoreList = ({ catalog = [] }) => {
    return (
        <div className="list">
            {catalog.map((item) => {
                return <CategoreItem key={item.idCategory} {...item} />;
            })}
        </div>
    );
};

export default CategoreList;
