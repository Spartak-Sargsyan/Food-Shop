import { Link } from "react-router-dom";
import { Routing } from "../../constant/RouteConstant";

const Header = () => {
    return (
        <nav className="green darken-1">
            <div classNameName="nav-wrapper">
                <Link to={Routing.home} className="brand-logo">
                    React Shop
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link
                            to="https://github.com/Spartak-Sargsyan/React-Shop"
                            target="black"
                        >
                            Repo
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
